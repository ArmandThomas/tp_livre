import styled from 'styled-components/native';
import {CATEGORIES, LIVRES} from "../models/data";
import {FlatList, Modal, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Category} from "./Category";
import {CardLivre} from "./CardLivre";
import {useState} from "react";
import {AddCategory} from "./AddCategory";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {AddLivre} from "./AddLivre";

export const HomePage = () => {

    const [filter, setFilter] = useState("c0");
    const [listCategory, setListCategory] = useState(CATEGORIES);
    const [listLivre, setListLivre] = useState(LIVRES);

    const [showModal, setShowModal] = useState(false);
    const [typeModal, setTypeModal] = useState(undefined);

    const livreFiltered = filter === "c0" ? LIVRES : LIVRES.filter(livre => livre.categorieId.includes(filter));

    const closeModal = () => {
        setShowModal(false);
        setTypeModal(undefined);
    }

    const userWantToAddNewCategory = () => {
        setShowModal(true);
        setTypeModal("category");
    }

    const userWantToAddNewLivre = () => {
        setShowModal(true);
        setTypeModal("livre");
    }

    const createANewCategory = (newCategory) => {
        setListCategory([...listCategory, {...newCategory, id: `c${listCategory.length}`}]);
        closeModal();
    }

    const createANewLivre = (newLivre) => {
        setListLivre([...listLivre, {...newLivre, id: `m${listLivre.length}`}]);
        console.log("newLivre", newLivre)
        closeModal();
    }


    const categoriesWithMore = [...listCategory, {genre: "+", couleur: "#fff", id: "add"}];


    return (
        <ViewHomePage>
            <Modal
                visible={showModal}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <ModalView>
                    <ActionModal>
                        <TouchableOpacity onPress={closeModal}>
                            <View>
                                <AntDesign name="close" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </ActionModal>
                    <ContentModal>
                        <ContainerTitle><H1>{
                            typeModal === "category" ? "Ajouter une catégorie" : "Ajouter un livre"
                        }</H1></ContainerTitle>
                        {
                            typeModal === "category" ?
                                <AddCategory createANewCategory={createANewCategory}/>
                                : <AddLivre listCategories={listCategory} createANewLivre={createANewLivre}/>
                        }
                    </ContentModal>
                </ModalView>


            </Modal>
            <ContainerTitle><H1>Welcome to Lary !</H1></ContainerTitle>
            <Section>
                <FlatList
                    data={categoriesWithMore}
                    renderItem={(category) =>
                        <Category
                            {...category.item}
                            isActive={!category.item.genre === "+" && category.item.id === filter}
                            editFilter={setFilter}
                            addNewCategory={category.item.genre === "+" ? userWantToAddNewCategory  : null}
                        />}
                    numColumns={4}
                    columnWrapperStyle={{ flexWrap: 'wrap'}}
                />
            </Section>
            <Section>
                <H2>Les livres :</H2>
                <ContainerListLivre>
                    <ScrollView horizontal={true}>
                        {
                            livreFiltered.map(livre =>
                                <ContainerFilm key={livre.id}><CardLivre {...livre} /></ContainerFilm>
                            )
                        }
                    </ScrollView>
                </ContainerListLivre>
            </Section>
            <Section>
                <ContainerTitle><Text>Ajouter un nouveau livre :</Text></ContainerTitle>
                <ContainerTitle>
                    <Ionicons
                        name="add-circle"
                        size={48}
                        color="#FF8C00"
                        onPress={() => {
                            userWantToAddNewLivre();
                        }}
                    />
                </ContainerTitle>
            </Section>
        </ViewHomePage>
    )
}

const ViewHomePage = styled.View`
    margin-top: 70px;

`;

const H1 = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const H2 = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`;

const ContainerTitle = styled.View`
    padding: 10px;
    width: 80%;
    align-self: center;
    flex-direction: row;
    justify-content: center;
`;

export const Section = styled.View`
    margin-top: 20px;
`;

const ContainerFilm = styled.View`
`;

const ContainerListLivre = styled.View`
    margin-top: 20px;
`;

const ContentModal = styled.View`
    flex: 1;
    justify-content: center;
`;

const ActionModal = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`;

const ModalView = styled.View`
    flex: 1;
    background-color: #eee;
`;