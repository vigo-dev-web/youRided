const BASE_URL = 'http://localhost:1337/api/'

export const getElectroscooters = async () => {
   try {
      const res = await fetch(BASE_URL + 'electroscooters?populate[product][populate]=*')
      if (!res.ok) {
         throw new Error(`Not found! Status: ${res.status}`)
      }
      return await res.json()
   } catch (error) {
      console.log(error)
   }
}

export const getKickscooters = async () => {
   const res = await fetch(BASE_URL + 'electroscooters?populate=*')
   return res.json()
}