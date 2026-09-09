import { onMounted, ref, unref, watchEffect } from "vue"
import axios from "axios";

const useAxios = (city) => {
    let weather = ref(null);
    let ccity = ref(city);
    const handleBlur = async () => {
        try {
            const response = await axios.get("https://restapi.amap.com/v3/weather/weatherInfo", {
                params: {
                    key: "4bdc6b1ae8b8cdd031369bc3c112da9f",
                    city: unref(city),
                    extensions: "all",
                }
            })
            weather.value = response.data.forecasts[0].casts
        } catch (err) {
            console.log(err);
        }
    }
    watchEffect(handleBlur)
    return {
        weather,ccity
    }
}

export default useAxios