import React from "react";
import LottieView from "lottie-react-native";

import loadingCar from "../../assets/LoadingCar.json";

import { Container } from "./styles";

export function LoadAnimation() {
    return (
        <Container>
            <LottieView 
                source={loadingCar}
                style={{ height: 200 }}
                autoPlay
                loop
            />
        </Container>
    )
}