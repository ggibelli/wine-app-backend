"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colore = exports.Rating = exports.QueryOrderBy = exports.Menzione = exports.DenomZona = exports.EspressioneComunitaria = exports.TypeProduct = exports.MetodoProduttivo = exports.TypeAd = void 0;
var TypeAd;
(function (TypeAd) {
    TypeAd["SELL"] = "SELL";
    TypeAd["BUY"] = "BUY";
})(TypeAd = exports.TypeAd || (exports.TypeAd = {}));
var MetodoProduttivo;
(function (MetodoProduttivo) {
    MetodoProduttivo["CONVENZIONALE"] = "CONVENZIONALE";
    MetodoProduttivo["BIOLOGICO"] = "BIOLOGICO";
    MetodoProduttivo["BIODINAMICO"] = "BIODINAMICO";
    MetodoProduttivo["NATURALE"] = "NATURALE";
})(MetodoProduttivo = exports.MetodoProduttivo || (exports.MetodoProduttivo = {}));
var TypeProduct;
(function (TypeProduct) {
    TypeProduct["ADWINE"] = "AdWine";
    TypeProduct["ADGRAPE"] = "AdGrape";
})(TypeProduct = exports.TypeProduct || (exports.TypeProduct = {}));
var EspressioneComunitaria;
(function (EspressioneComunitaria) {
    EspressioneComunitaria["DOP"] = "DOP";
    EspressioneComunitaria["IGP"] = "IGP";
    EspressioneComunitaria["ND"] = "ND";
})(EspressioneComunitaria = exports.EspressioneComunitaria || (exports.EspressioneComunitaria = {}));
var DenomZona;
(function (DenomZona) {
    DenomZona["DOC"] = "DOC";
    DenomZona["DOCG"] = "DOCG";
    DenomZona["IGT"] = "IGT";
    DenomZona["VARIETALE"] = "VARIETALE";
    DenomZona["VINO"] = "VINO";
})(DenomZona = exports.DenomZona || (exports.DenomZona = {}));
var Menzione;
(function (Menzione) {
    Menzione["CLASSICO"] = "CLASSICO";
    Menzione["RISERVA"] = "RISERVA";
    Menzione["SUPERIORE"] = "SUPERIORE";
    Menzione["VIGNA"] = "VIGNA";
})(Menzione = exports.Menzione || (exports.Menzione = {}));
var QueryOrderBy;
(function (QueryOrderBy) {
    QueryOrderBy["CreatedAtASC"] = "createdAt_ASC";
    QueryOrderBy["CreatedAtDESC"] = "createdAt_DESC";
    QueryOrderBy["PriceASC"] = "price_ASC";
    QueryOrderBy["priceDESC"] = "price_DESC";
})(QueryOrderBy = exports.QueryOrderBy || (exports.QueryOrderBy = {}));
var Rating;
(function (Rating) {
    Rating[Rating["Useless"] = 0.5] = "Useless";
    Rating[Rating["Useless+"] = 1] = "Useless+";
    Rating[Rating["Poor"] = 1.5] = "Poor";
    Rating[Rating["Poor+"] = 2] = "Poor+";
    Rating[Rating["Ok"] = 2.5] = "Ok";
    Rating[Rating["Ok+"] = 3] = "Ok+";
    Rating[Rating["Good"] = 3.5] = "Good";
    Rating[Rating["Good+"] = 4] = "Good+";
    Rating[Rating["Excellent"] = 4.5] = "Excellent";
    Rating[Rating["Excellent+"] = 5] = "Excellent+";
})(Rating = exports.Rating || (exports.Rating = {}));
var Colore;
(function (Colore) {
    Colore["BIANCA"] = "BIANCA";
    Colore["ROSSA"] = "ROSSA";
})(Colore = exports.Colore || (exports.Colore = {}));
