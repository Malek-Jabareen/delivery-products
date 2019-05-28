const VALIDATION_ERROR_MESSAGES = {
    nameValidation: "Name must be not empty",
    descriptionValidation: "Description must be not empty",
    priceValidation: "Price must be bigger than zero"
};

const FIELDS_TYPES = {
    string: "string",
    number: "number"
};

const FIELDS = {
    name: "NAME",
    description: "DESCRIPTION",
    price: "PRICE"
};

const EDIT_MESSAGE = {
    subject: "Edit Product",
    content1: "Thank you for updating product \"",
    content2: "\", The product edited successfully."
};

const DELETE_MESSAGE = {
    subject: "Delete",
    content1: "Product \"",
    content2: "\" deleted successfully."
};

const SORT_TYPES = {
    name: "Name",
    description: "Description",
    creationDate: "Creation Date",
    insertionDate: "Insertion Date",
    price: "Price"
};

    export {VALIDATION_ERROR_MESSAGES,FIELDS,FIELDS_TYPES,EDIT_MESSAGE,DELETE_MESSAGE,SORT_TYPES}