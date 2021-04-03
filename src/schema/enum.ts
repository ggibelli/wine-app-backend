import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum Province {
    AG
    AL
    AN
    AO
    AP
    AQ
    AR
    AT
    AV
    BA
    BG
    BI
    BL
    BN
    BO
    BR
    BS
    BT
    BZ
    CA
    CB
    CE
    CH
    CL
    CN
    CO
    CR
    CS
    CT
    CZ
    EN
    FC
    FE
    FG
    FI
    FM
    FR
    GE
    GO
    GR
    IM
    IS
    KR
    LC
    LE
    LI
    LO
    LT
    LU
    MB
    MC
    ME
    MI
    MN
    MO
    MS
    MT
    NA
    NO
    NU
    OR
    PA
    PC
    PD
    PE
    PG
    PI
    PN
    PO
    PR
    PT
    PU
    PV
    PZ
    RA
    RC
    RE
    RG
    RI
    RM
    RN
    RO
    SA
    SI
    SO
    SP
    SR
    SS
    SU
    SV
    TA
    TE
    TN
    TO
    TP
    TR
    TS
    TV
    UD
    VA
    VB
    VC
    VE
    VI
    VR
    VT
    VV
  }

  enum Regioni {
    ABRUZZO
    BASILICATA
    CALABRIA
    CAMPANIA
    EMILIA
    FRIULI
    LAZIO
    LIGURIA
    LOMBARDIA
    MARCHE
    MOLISE
    PIEMONTE
    PUGLIA
    SARDEGNA
    SICILIA
    TOSCANA
    TRENTINO
    UMBRIA
    VALDAOSTA
    VENETO
  }

  enum TypeAd {
    SELL
    BUY
  }

  enum TypeProduct {
    AdWine
    AdGrape
  }

  enum Menzione {
    CLASSICO
    RISERVA
    SUPERIORE
    VIGNA
  }

  enum MetodoProduttivo {
    CONVENZIONALE
    BIOLOGICO
    BIODINAMICO
    NATURALE
    VEGANO
  }

  enum Colore {
    BIANCA
    ROSSA
  }

  enum EspressioneComunitaria {
    DOP
    IGP
    ND
  }

  enum DenomZona {
    DOC
    DOCG
    IGT
    VARIETALE
    VINO
  }

  enum QueryOrderBy {
    createdAt_ASC
    createdAt_DESC
    price_ASC
    price_DESC
  }
`;
