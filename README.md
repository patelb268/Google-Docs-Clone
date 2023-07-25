# Google-Docs-Clone
<img width="691" alt="GDC" src="https://github.com/patelb268/Google-Docs-Clone/assets/109325051/247a6bf1-f0da-4734-a62f-de99dc9882c8">

This project is a Google Docs clone built using ReactJS and Firebase. It allows users to create, edit, and collaborate on documents in real-time, similar to the functionality provided by Google Docs.

## Features


- **Real-time Collaboration:** Multiple users can collaborate on the same document simultaneously, and changes made by one user will be immediately reflected for all others.

- **Rich Text Editing:** The editor supports rich text formatting, including bold, italic, underline, bullet lists, numbered lists, headings, etc.


## Installation

1. Clone the repository to your local machine:
   
        https://github.com/patelb268/Google-Docs-Clone.git
        cd Google-Docs-Clone
   
2. Install the required dependencies:

        npm install

### How to Add Firebase to Our App
Now, let's install Firebase for the database. Simply install Firebase using the below command:

    npm install firebase

Head over to https://firebase.google.com/ and click `Go to console` at the top right.
   ![Screenshot-2022-05-07-120526](https://github.com/patelb268/Google-Docs-Clone/assets/109325051/fc74f140-033a-4cd6-b996-4498093ae41f)

Then, click Add Project.
![Screenshot-2022-05-07-120625](https://github.com/patelb268/Google-Docs-Clone/assets/109325051/046e57ba-48cf-4799-ba83-d376a2f4a821)

After creating the Project, click the code button to create a web app in Firebase. Give it a name and we are ready to go.
![Screenshot-2022-05-07-120803](https://github.com/patelb268/Google-Docs-Clone/assets/109325051/e8eae40d-7f98-4b51-a586-8424e9a5239f)

add all config data to firebaseConfig.js
### Example
![Screenshot-2022-05-07-120857](https://github.com/patelb268/Google-Docs-Clone/assets/109325051/ec1e3c2b-0949-490b-b41e-f792d98478a3)

configure Firestore Database.
Go to Firestore database from the left sidebar, and click Create Database.
![Screenshot-2022-05-07-121804](https://github.com/patelb268/Google-Docs-Clone/assets/109325051/e88cd196-4a97-4904-bf47-0564140a14a8)

start Database in Production Mode. So, click Next, and then Enable.
![Screenshot-2022-05-07-121900](https://github.com/patelb268/Google-Docs-Clone/assets/109325051/802883c7-80bf-4936-aea7-15faf600d7a3)

make the security rules public. Now anyone can write data or read them, even without authentication.

          rules_version = '2';
          service cloud.firestore {
            match /databases/{database}/documents {
              match /{document=**} {
                allow read, write;
              }
            }
          }

## Contributing

Contributions to this project are welcome. If you find any issues or have feature suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the [BSD3 License](LICENSE).


## Acknowledgments

- Thanks to the creators of ReactJS and Firebase for providing powerful tools for building web applications.
