import {FlatList, Image, Text, useWindowDimensions} from "react-native";
import { useRoute } from '@react-navigation/native';
import {getCategoryFromHisId, getLivreFromHisId} from "../utils";
import styled from 'styled-components/native';
import {Category} from "./Category";
import {Section} from "./HomePage";
import { AntDesign } from '@expo/vector-icons';

export const LivrePage = () => {

    const route = useRoute();

    const infoFilm = getLivreFromHisId(route.params.id);

    const windowWidth = useWindowDimensions().width;

    const imageWidth = windowWidth - 80;

    const categories = infoFilm.categorieId.map((categorieId) => {
        return getCategoryFromHisId(categorieId);
    });

    return (
        <ContainerLivrePage>
            <Image
                source={{uri: infoFilm.imageUrl}}
                style={{width: imageWidth, height : 150, alignSelf: "center", marginTop: 20}}
                resizeMode="contain"
            />
            <TextDescription>{infoFilm.description}</TextDescription>
            <Section>
                <Text>Nombre de tomes : {infoFilm.tomes}</Text>
            </Section>
            <Section>
                {
                    <FlatList
                        data={categories}
                        renderItem={(category) => <Category {...category.item} />}
                        numColumns={4}
                        columnWrapperStyle={{ flexWrap: 'wrap'}}
                    />
                }
            </Section>
            {
                infoFilm.enCours &&
                <Section>
                    <AlertView>
                        <AntDesign name="warning" size={24} color="black" />
                        <TextAlert>Attention, ce livre est actuellement en cours d'écriture !</TextAlert>
                    </AlertView>
                </Section>
            }

        </ContainerLivrePage>
    )

}

const ContainerLivrePage = styled.View`
  padding: 10px;
`;

const TextDescription = styled.Text`
    font-size: 15px;
    margin-top: 20px;
`;

const AlertView = styled.View`
  background-color: #ffd200;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextAlert = styled.Text`
  color: #000;
  font-weight: bold;
`;