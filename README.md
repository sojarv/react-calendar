# Koledar

Preprost grafičen koledar, ki prikazuje trenutni mesec in leto. Poleg tega na podalgi tekstovne datoteke prikazuje tudi vnaprej pripravljene praznike.

## Seznam praznikov

| Dan | Mesec | Leto | Ime praznika                   |
| --- | ----- | ---- | ------------------------------ |
| 1   | 1     | 0    | Novo leto                      |
| 2   | 2     | 2021 | Dan po prazniku dela           |
| 8   | 2     | 0    | Presernov dan                  |
| 15  | 4     | 0    | Rojstni dan                    |
| 19  | 4     | 2021 | Rok za oddajo                  |
| 1   | 5     | 0    | Praznik dela                   |
| 26  | 12    | 0    | Dan samostojnosti in enotnosti |

Za ponvaljajoče praznike je vnešeno število 0. Prazniki so prikazani le za trenutni mesec.

Prazniki so shranjeni v datoteki /public/dates.txt

## Uporabljene tehnologije

Za izdelavo spletne strani sta bila uporabljena ReactJS in SCSS. Za pridobitev podatkov datumov iz tekstovne datoteke je bil uporabljen axios.

Live: https://sojarv.github.io/react-calendar
