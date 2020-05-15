import React from 'react';
import {PersonstoreServiceConsumer} from '../ServiceContext';

const withPersonstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <PersonstoreServiceConsumer>
                {
                    (personstoreService) => {
                        return (
                            <Wrapped 
                                {...props}
                                personstoreService={personstoreService} 
                            />
                        )
                    }
                }
            </PersonstoreServiceConsumer>
        )
    }
}

export default withPersonstoreService;