# Liana Šljonkina — Portfolio Website

A multi-page personal portfolio website built with HTML, CSS and JavaScript as a final project of a programming course (Python, JavaScript, HTML).

🔗 **Live site:** https://lianasl.github.io/HTML_ZP/

## About

I have been working in IT for about three years. I started as a software tester on crowdtesting platforms (uTest, TestBird) and later completed a programming course. This website presents my portfolio and links to a small online shop built with Django.

## Pages

| Page | File | Stylesheet |
|------|------|------------|
| Home (Hlavní) | `index.html` | `style.css` |
| About me (O mně) | `index1.html` | `style1.css` |
| Certificates (Certifikáty) | `index2.html` | `style2.css` |
| Photo gallery (Fotogalerie) | `index3.html` | `style3.css` |
| E-shop | `index4.html` | `style4.css` |
| Contact (Kontakt) | `index5.html` | `style5.css` |

The **E-SHOP** button in the navigation menu opens the page of the online shop.

## Project structure

```
HTML_ZP/
├── asets/          # images (photos, certificates, shop pictures)
├── index.html
├── index1.html
├── index2.html
├── index3.html
├── index4.html
├── index5.html
├── script.js
├── style.css
├── style1.css
├── style2.css
├── style3.css
├── style4.css
└── style5.css
```

## Technologies

- HTML5
- CSS3
- JavaScript
- Google Fonts: EB Garamond, Playfair Display
- Hosted on GitHub Pages

## E-shop

The online shop "FLORENTINA" is a separate project built with **Django (Python)**.

- Repository: https://github.com/LianaSl/Django_ZP

> **Note:** the button on the E-SHOP page leads to `http://127.0.0.1:8000/shop/`,
> i.e. to a Django server running locally. To open the shop, first start the Django
> project (see the README in the repository above, command `python manage.py runserver`).
> On the live GitHub Pages site the button therefore works only while the local
> server is running.

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/LianaSl/HTML_ZP.git
   ```
2. Open `index.html` in your browser.
3. To open the e-shop from the E-SHOP page, start the Django project from the
   repository https://github.com/LianaSl/Django_ZP (instructions are in its README).

## Contact

- Email: sljonkina@gmail.com
- GitHub: [LianaSl](https://github.com/LianaSl)
