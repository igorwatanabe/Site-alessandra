export const revalidate = 3600

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!placeId || !apiKey) {
    return Response.json(
      { error: 'Google Reviews is not configured' },
      { status: 500 },
    )
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: 'name,rating,reviews',
    reviews_sort: 'newest',
    key: apiKey,
  })

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
    {
      next: { revalidate: 86400 }, // 24hrs
    },
  )

  if (!response.ok) {
    return Response.json(
      { error: 'Google Reviews request failed' },
      { status: 502 },
    )
  }

  const data = await response.json()

  if (data.status !== 'OK') {
    return Response.json(
      { error: data.error_message || 'Google Reviews request failed' },
      { status: 502 },
    )
  }

  return Response.json({
    rating: data.result?.rating || 5,
    reviews: data.result?.reviews || [],
  })
}