# duel-fun-frontend

## Duel.fun Frontend

This frontend simulates on-chain Duel state using static data.
Smart contract integration will replace `js/data.js`.

### Data Interface
Each duel expects:
- id
- teamA { name, symbol, marketCap }
- teamB { name, symbol, marketCap }
- cap
- status

Frontend is chain-agnostic and Solana-ready.
