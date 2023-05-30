import {Switch, View} from "react-native";
import {ButtonSubmit, Input, LabelButton} from "./AddCategory";
import styled from 'styled-components/native';
import {useState} from "react";
import MultiSelect from 'react-native-multiple-select';

export const AddLivre = ({ listCategories, createANewLivre }) => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [tomes, setTomes] = useState(0);
    const [enCours, setEnCours] = useState(false);

    return (
        <View>
            <ContainerMultiSelect>
                <MultiSelect
                    items={listCategories}
                    uniqueKey="id"
                    onSelectedItemsChange={setSelectedCategories}
                    ref={(component) => { this.multiSelect = component }}
                    selectedItems={selectedCategories}
                    selectText="Pick Items"
                    searchInputPlaceholderText="Search Items..."
                    tagRemoveIconColor="#FF8C00"
                    tagBorderColor="#FF8C00"
                    tagTextColor="#FF8C00"
                    selectedItemTextColor="#FF8C00"
                    selectedItemIconColor="#FF8C00"
                    itemTextColor="#000"
                    displayKey="genre"
                    searchInputStyle={{ color: '#FF8C00' }}
                    submitButtonColor="#FF8C00"
                    submitButtonText="Submit"
                />
            </ContainerMultiSelect>
            <Input placeholder="Titre :" onChangeText={setTitre} value={titre}/>
            <Input placeholder="Description :" onChangeText={setDescription} value={description}/>
            <Input placeholder="Nombre de tomes :" onChangeText={setTomes} value={tomes} keyboardType="numeric"/>
            <Input placeholder="Image :" onChangeText={setImageURL} value={imageURL} />
            <SwitchContainer>
                <LabelSwitch>En cours</LabelSwitch>
                <Switch
                    trackColor={{false: '#000', true: '#FF8C00'}}
                    thumbColor={enCours ? '#000' : '#FF8C00'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setEnCours}
                    value={enCours}
                />
            </SwitchContainer>
            <ButtonSubmit onPress={
                () =>  createANewLivre({
                    titre,
                    description,
                    imageUrl : imageURL,
                    tomes,
                    categorieId : selectedCategories,
                    enCours
                })
            }>
                <LabelButton>Ajouter</LabelButton>
            </ButtonSubmit>
        </View>
    )
}

const ContainerMultiSelect = styled.View`
  width: 80%;
  align-self: center;
`;

const LabelSwitch = styled.Text`
  color: #000;
  font-weight: bold;
  align-self: center;
  margin: 10px;
`;

const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  align-self: center;
`;
