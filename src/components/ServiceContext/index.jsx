import React from 'react';

const {
    Provider: PersonstoreServiceProvider,
    Consumer: PersonstoreServiceConsumer
} = React.createContext();

export {
    PersonstoreServiceProvider,
    PersonstoreServiceConsumer
}