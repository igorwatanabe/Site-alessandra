export async function GET() {
    const PLACE_ID = process.env.GOOGLE_PLACE_ID
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY
  
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${PLACE_ID}` +
      `&fields=name,rating,reviews` +
      `&reviews_sort=newest` +
      `&key=${API_KEY}`
  
    const response = await fetch(url)
  
    const data = await response.json()
  
    return Response.json({
      rating: data.result?.rating || 5,
      reviews: data.result?.reviews || [],
    })
  }