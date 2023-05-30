import {Text,View,TouchableOpacity} from "react-native";
import styled from 'styled-components/native';

export const Category = ({ genre, isActive, couleur, editFilter, id, addNewCategory }) => {

    return (
        <View>
            <TouchableOpacity
                disabled={!editFilter}
                onPress={() => {
                    if (addNewCategory) {
                        addNewCategory();
                        return;
                    }
                    if (editFilter) {
                        editFilter(id);
                    }
                }}
            >
                <ContainerCategory
                    isActive={isActive || false}
                    couleur={couleur}
                >
                    <Text>{genre}</Text>
                </ContainerCategory>
            </TouchableOpacity>
        </View>
    )
}

const ContainerCategory = styled.View`
    margin-left: 10px;
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    border : ${props => props.isActive ? `2px solid ${props.couleur}` : "none"};
`;
