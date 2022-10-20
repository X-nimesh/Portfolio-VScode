import { extendTheme } from "@chakra-ui/react";
import { ButtonTheme as Button } from "./components/ButtonTheme";
import { TextTheme as Text } from "./components/TextTheme";
const theme = extendTheme({
    colors: {
        NightOwbg: '#031626',
        textC: '#727591',
    },
    components: {
        Button,
        Text
    }
})
export default theme;