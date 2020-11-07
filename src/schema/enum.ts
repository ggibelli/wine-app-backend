import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum Province {
    AG
    AL
    AN
    AO
    AR
    AP
    AT
    AV
    BA
    BL
    BN
    BG
    BI
    BO
    BZ
    BS
    BR
    CA
    CL
    CB
    CE
    CT
    CZ
    CH
    CO
    CS
    CR
    KR
    CN
    EN
    FM
    FE
    FI
    FG
    FO
    FC
    FR
    GE
    GO
    GR
    IM
    IS
    SP
    AQ
    LT
    LE
    LC
    LI
    LO
    LU
    MC
    MN
    MS
    MT
    ME
    MI
    MO
    MB
    NA
    NO
    NU
    OR
    PD
    PA
    PR
    PV
    PG
    PS
    PU
    PE
    PC
    PI
    PT
    PN
    PZ
    PO
    RG
    RA
    RC
    RE
    RI
    RN
    RM
    RO
    SA
    SS
    SV
    SI
    SR
    SO
    TA
    TE
    TR
    TO
    TP
    TN
    TV
    TS
    UD
    VA
    VE
    VB
    VC
    VR
    VV
    VI
    VT
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
    BOLZANO
    TRENTO
    UMBRIA
    VALDAOSTA
    VENETO
  }

  enum Type {
    SELL
    BUY
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

  enum Rating {
    POOR
    AVERAGE
    OK
    GOOD
    PERFECT
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
`;
