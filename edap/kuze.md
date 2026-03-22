## **Kožní soustava člověka (Integumentum commune)**

Kůže je největší orgán lidského těla. U dospělého člověka dosahuje plochy 1,5 až 2 m² a tvoří přibližně 7 % celkové tělesné hmotnosti. Její hlavní funkcí je ochrana organismu před vlivy vnějšího prostředí, termoregulace, smyslové vnímání a exkrece.  
Pro hlubší studium doporučujeme navštívit [článek o kůži na české Wikipedii](https://cs.wikipedia.org/wiki/K%C5%AF%C5%BEe).  

![obrazek](img.png)

<!-- ID: chk_kuze_obecne -->

## **Vrstvy kůže a kožní deriváty**

Kůže se anatomicky dělí na tři základní vrstvy, z nichž každá má specifickou buněčnou stavbu a funkci. Zde je jejich přehledné rozdělení:  
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px', 'nodePadding': '15' }}}%%
graph LR
  root["Kůže"] --> pok["Pokožka (Epidermis)"]
  pok --> k["Keratinocyty"]
  pok --> m["Melanocyty"]
  pok --> bc["Bez cév"]
  root --> sk["Škára (Dermis)"]
  sk --> kc["Krevní cévy"]
  sk --> nz["Nervová zakončení"]
  sk --> kd["Kožní deriváty"]
  root --> pod["Podkožní vazivo (Hypodermis)"]
  pod --> tt["Tuková tkáň"]
  pod --> iz["Izolace"]
```

Mezi kožní deriváty (přídatné orgány kůže) patří vlasy, chlupy, nehty a kožní žlázy (potní, mazové a pachové). Tyto struktury se vyvinuly z pokožky, ale zasahují hluboko do škáry.  
<!-- ID: chk_vrstvy -->

## **Termoregulace**

Jednou z nejdůležitějších funkcí kůže je **termoregulace**. Kůže pomáhá udržovat stálou tělesnou teplotu prostřednictvím krevních cév a potních žláz. Níže uvedený diagram ukazuje reakci organismu na přehřátí: 
```mermaid
graph TD  
  A[Zvýšení teploty organismu] --> B(Hypotalamus detekuje změnu)  
  B --> C{Reakce kožní soustavy}  
  C --> D[Rozšíření kožních cév<br>vazodilatace]  
  C --> E[Zvýšená produkce<br>potu]  
  D --> F[Odvod tepla do okolí]  
  E --> F  
  F --> G[Ochlazení organismu]
```

<!-- ID: chk_termoregulace -->
