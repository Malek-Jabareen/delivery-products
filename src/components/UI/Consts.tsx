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
    content1: "Product",
    content2: "edited successfully."
};

const DELETE_MESSAGE = {
    subject: "Delete Product",
    content1: "Product",
    content2: "deleted successfully."
};

    export {VALIDATION_ERROR_MESSAGES,FIELDS,FIELDS_TYPES,EDIT_MESSAGE,DELETE_MESSAGE}