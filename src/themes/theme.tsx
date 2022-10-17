import { extendTheme } from "@chakra-ui/react";
import { ButtonTheme as Button } from "./components/ButtonTheme";
const theme = extendTheme({
    colors: {
        NightOwbg: '#031626',
        textC: '#727591',
    },
    components: {
        Button
    }
})
export default theme;