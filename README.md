# CourtFlow

CourtFlow is a public court booking platform.

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL
- Prisma
- Stripe

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/grandrichlife727-design/courts.git
   cd courts
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables. Copy `.env.example` to `.env` and fill in the required fields.
4. Run the application:
   ```bash
   npm run dev
   ```
5. Access the application at `http://localhost:3000`.

## Project Structure
- `apps/web`: Public + Admin UI
- `packages/db`: Prisma schema

## License
This project is licensed under the MIT License.