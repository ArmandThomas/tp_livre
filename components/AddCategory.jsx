import {Text, View} from "react-native";
import styled from 'styled-components/native';
import {useState} from "react";

export const AddCategory = ({createANewCategory}) => {

    const [genre, setGenre] = useState("");
    const [couleur, setCouleur] = useState("");

    return (
        <View>
            <Input placeholder="Genre : " onChangeText={setGenre} value={genre}/>
            <Input placeholder="Couleur (hex) : " onChangeText={setCouleur} value={couleur}/>
            <ButtonSubmit onPress={
                () =>  createANewCategory({
                    genre,
                    couleur
                })
            }>
                <LabelButton>Ajouter</LabelButton>
            </ButtonSubmit>
        </View>

    )
}

export const Input = styled.TextInput`
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 80%;
    align-self: center;
`;

export const ButtonSubmit = styled.Pressable`
  background-color: #FF8C00;
  padding: 12px 45px;
  border-radius: 10px;
  margin: 15px;
  align-self: center;
`;

export const LabelButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;

