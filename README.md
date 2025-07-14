🚀 Secure User Authentication System with Supabase


💡 Overview

This project implements a secure, modern, and fully functional user authentication system using Supabase. It supports sign up, login, and protected route access, with proper session handling and security best practices.


💡 View it here :
https://68749679684f29d244312c27--venerable-palmier-c3ffcf.netlify.app/
✨ Features
✅ User sign up & login

✅ Email-based authentication

✅ Session management

✅ Password hashing (handled securely by Supabase)

✅ Protected routes

✅ Easy to extend for role-based access (e.g., admin vs. user)

✅ Modern and clean frontend design (can use React, Vue, Svelte, or plain HTML/JS)

🏗️ Tech Stack
Backend & Auth: Supabase (PostgreSQL + Auth API)

Frontend: Vite (or React, Vue, etc.)

Database: Supabase managed Postgres

Deployment: Vercel / Netlify / Render (or any static host + Supabase backend)

⚙️ Setup & Configuration
1️⃣ Clone this repo
bash
Copy
Edit
git clone https://github.com/yourusername/supabase-auth-app.git
cd supabase-auth-app
2️⃣ Install dependencies
bash
Copy
Edit
npm install
or
yarn install
3️⃣ Configure Supabase
Create a project at Supabase, then:

Go to Settings → API.

Copy your Project URL and Anon public key.

4️⃣ Create .env file
In the project root, create a file named .env and add:

env
Copy
Edit
VITE_SUPABASE_URL=*****************
VITE_SUPABASE_ANON_KEY=***************************************************************

5️⃣ Update the Supabase client
js
Copy
Edit
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

6️⃣ Start the app
bash
Copy
Edit
npm run dev
 or
yarn dev

💻 Usage
Visit /signup to create an account.

Visit /login to sign in.

Access protected pages only after login.

Session persists automatically using Supabase auth.

🛡️ Security Notes
The public anon key is safe to expose in client apps.

Never include your service role keys or database passwords in frontend code or public repos.

Always enable Row Level Security (RLS) in your Supabase tables for fine-grained access control.

🌐 Deployment

Deploy easily on platforms like:

Vercel

Netlify

Render

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

⭐ Credits
Supabase — the open source Firebase alternative.

Inspired by modern auth UI patterns from Stripe and Vercel.


