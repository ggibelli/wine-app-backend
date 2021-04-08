"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.ads = void 0;
const types_1 = require("../types");
const mongodb_1 = require("mongodb");
const indirizzo = {
    via: 'asd asddasd',
    CAP: '12345',
    comune: 'aaaaaa',
    provincia: types_1.Province.AG,
    regione: types_1.Regioni.ABRUZZO,
};
const ads = () => {
    return [
        {
            //_id: '1234',
            //postedBy: '123',
            wineName: 'Vino',
            wine: new mongodb_1.ObjectId(),
            sottoZona: 'Sotto',
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            litersFrom: 500,
            litersTo: 600,
            content: 'wow',
            address: indirizzo,
            typeAd: types_1.TypeAd.BUY,
            typeProduct: types_1.TypeProduct.ADWINE,
            datePosted: new Date('December 17, 1995 03:24:00'),
            isActive: true,
            needsFollowUp: false,
        },
        {
            //_id: '1234',
            //postedBy: '333',
            wineName: 'Vino vendo',
            wine: new mongodb_1.ObjectId(),
            sottoZona: 'Sotto',
            needsFollowUp: false,
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            litersFrom: 500,
            litersTo: 600,
            content: 'waaow',
            address: indirizzo,
            typeAd: types_1.TypeAd.SELL,
            typeProduct: types_1.TypeProduct.ADWINE,
            datePosted: new Date('December 17, 1995 03:24:20'),
            isActive: true,
        },
        {
            //_id: '1234',
            //postedBy: '344',
            vineyardName: 'Uva compro',
            vineyard: new mongodb_1.ObjectId(),
            needsFollowUp: false,
            harvest: 2010,
            abv: 12.5,
            priceFrom: 1.0,
            priceTo: 1.5,
            kgFrom: 500,
            kgTo: 600,
            content: 'ostia',
            address: indirizzo,
            typeAd: types_1.TypeAd.BUY,
            typeProduct: types_1.TypeProduct.ADGRAPE,
            datePosted: new Date('December 17, 1995 02:24:00'),
            isActive: true,
        },
        {
            //_id: '1234',
            //postedBy: '555',
            vineyardName: 'Uva vendita',
            vineyard: new mongodb_1.ObjectId(),
            harvest: 2020,
            abv: 12.0,
            priceFrom: 1.0,
            priceTo: 1.5,
            kgFrom: 500,
            kgTo: 600,
            content: 'lol',
            address: indirizzo,
            typeAd: types_1.TypeAd.SELL,
            typeProduct: types_1.TypeProduct.ADGRAPE,
            datePosted: new Date('December 27, 1995 03:24:00'),
            isActive: true,
            needsFollowUp: false,
        },
    ];
};
exports.ads = ads;
const users = () => {
    return [
        {
            email: 'gio@prova.it',
            firstName: 'Giovanni',
            hideContact: false,
            lastName: 'Gibelli',
            password: 'giovanni',
            pIva: '12345678901',
            phoneNumber: '1234567890',
            address: indirizzo,
            isVerified: true,
            isPremium: true,
            isAdmin: true,
            adsRemaining: 0,
            dateCreated: new Date('December 27, 1995 03:24:00'),
        },
        {
            //_id: '123',
            email: 'gio2@prova.it',
            firstName: 'Mariuccio',
            hideContact: true,
            lastName: 'Porchetto',
            password: 'giovanni',
            pIva: '12345678301',
            phoneNumber: '1234567830',
            address: indirizzo,
            isVerified: true,
            isPremium: true,
            isAdmin: false,
            //ads: ads(),
            adsRemaining: 0,
            dateCreated: new Date('December 07, 1995 03:24:00'),
        },
        {
            //_id: '123',
            email: 'prova@prova.it',
            firstName: 'Luigetto',
            hideContact: true,
            lastName: 'Gopollo',
            password: 'giovanni',
            pIva: '12345678302',
            phoneNumber: '1234567834',
            address: indirizzo,
            isVerified: false,
            isPremium: true,
            isAdmin: false,
            //ads: ads(),
            adsRemaining: 0,
            dateCreated: new Date('December 02, 1995 03:24:00'),
        },
    ];
};
exports.users = users;