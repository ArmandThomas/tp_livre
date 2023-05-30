import styled from 'styled-components/native';
import {Image, Text, TouchableOpacity} from "react-native";
import {getCategoryFromHisId} from "../utils";
import {useNavigation} from "@react-navigation/native";

export const CardLivre = ({ categorieId, titre, imageUrl , id}) => {

    const navigation = useNavigation();

    const categories = categorieId.map((categorieId) => {
      return getCategoryFromHisId(categorieId).genre;
    })

    return (
        <TouchableOpacity
            onPress={
                () => navigation.navigate('LivrePage', {
                    titre: titre,
                    id
                })
            }
        >
            <ContainerLivre>
                <TextTitle
                    numberOfLines={1}
                >
                    {titre}
                </TextTitle>
                <Image source={{uri: imageUrl}} style={{width: 100, height: 150}} />
                <ContainerCategory>
                    <Text numberOfLines={1}>{categories.join(', ')}</Text>
                </ContainerCategory>

            </ContainerLivre>
        </TouchableOpacity>

    )
}

const ContainerLivre = styled.View`
    margin-left: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    max-width: 120px;
`;

const TextTitle = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

const ContainerCategory = styled.View`
    margin-top: 10px;
`;
