<p align="center">
  <img src="/public/images/graduation-cap.svg" alt="Logo" width="60" />
</p>

<h1 align="center">LearnLingo App</h1>

## Project Description

LearnLingo connects users with online language tutors.  
Users can explore benefits, browse and filter tutors, add favorites, and book
trial lessons.  
Some features require registration. The app includes an AI Assistant that helps
navigate the platform, find tutors, view details, understand lesson formats, and
get general information with personalized guidance.

## Live Demo

Check out the app online: [LearnLingo App](https://learnlingo-app.vercel.app)

---

## Main Pages

- **Home** – the main page showcasing the company’s benefits and a button to
  navigate to the tutors page.
- **Teachers** – the page with the catalog of tutors. Users can filter tutors
  by:
  - teaching language,
  - student proficiency level,
  - price per hour.  
    Additional functionality:
  - **Read more** button to expand detailed information about the tutor and view
    reviews,
  - **Book trial lesson** button opens a modal for booking a trial lesson,
  - heart-shaped button allows adding/removing tutors to/from the "Favorites"
    list.
- **Favorites (private page)** – displays tutors added by the user to
  "Favorites". Accessible only to registered users.

---

## Main Features

1. **Authentication via Firebase**:

   - registration, login, logout,
   - fetching data of the current user,
   - private Favorites page is accessible only for authenticated users.

2. **Form Handling**:

   - registration and login forms implemented with `react-hook-form` and `yup`,
   - all fields are required,
   - modals can be closed by clicking the "X", on the backdrop, or pressing the
     `Esc` key.

3. **Database**:

   - Firebase Firestore is used,
   - a tutors collection is created with the following fields:  
     `name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience`,
   - a users collection is created, each user having a subcollection of favorite
     tutors.

4. **Tutors Catalog**:

   - initially, 4 tutor cards are rendered,
   - the rest of the tutors are loaded via the **Load more** button (querying
     the database),
   - heart button:
     - for non-registered users – shows a message about unavailable
       functionality,
     - for registered users – allows adding/removing tutors from "Favorites"
       with state persistence after page reload.

5. **AI Assistant**:

   - Helps users navigate the platform and find suitable tutors.
   - Provides tutor details, including ratings, experience, and pricing.
   - Explains lesson formats (private, group, conversation practice, test prep,
     kids & teens programs).
   - Offers general company information (location, contact, social media,
     hours).

6. **Modals**:

   - trial lesson booking form (validated with `react-hook-form` and `yup`),
   - login/registration form,
   - both can be closed using standard methods (button, backdrop, Esc).

7. **Routing**:

   - implemented using **React Router**,
   - routes: `/`, `/teachers`, `/favorites`.

---

## Technologies Used

- ⚛️ **React**
- 🧭 **React Router**
- 🔐 **Firebase Authentication**
- 💾 **Firebase Firestore**
- 📝 **react-hook-form**
- ✅ **yup**
- ⚡ **Vite**
- 🎬 **Framer Motion** (for animations of lists, tutor cards, buttons, and
  modals)
- 🤖 **AI Assistant** (for guidance and recommendations)

---

## ⚙️ Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/igorivchenko/learnlingo-app.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

5. **To preview the production build locally:**

```bash
npm run preview
```
