import { Stack } from "expo-router";


const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={
                {
                    headerShown: false
                }
            }></Stack.Screen>
            <Stack.screen name="inicio"></Stack.screen>
        </Stack>

    )

}

export default RootLayout;