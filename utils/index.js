import {CATEGORIES, LIVRES} from "../models/data";

export const getCategoryFromHisId = (hisId) => {
    return CATEGORIES.find(category => category.id === hisId);
};

export const getLivreFromHisId = (hisId) => {
    return LIVRES.find(livre => livre.id === hisId);
}