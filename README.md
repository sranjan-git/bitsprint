# Hackathon Dashboard App

## Overview
This is a simple front-end application designed for an EdTech company, where organizers can create, edit, and delete hackathons. The application enables the management of hackathons by providing features like sorting, filtering, and searching hackathons. It also shows the status of hackathons (active, upcoming, past) with timers for easy tracking. Participants can view hackathons and access problem statements to make submissions.

## Features
### Organizer Dashboard
- **Create, Edit, and Delete Hackathons**: Organizers can create new hackathons and edit or delete existing ones.
- **Hackathon Data**: Each hackathon contains the following information:
  - Name
  - Start Date
  - End Date
  - Description
  - Image
  - Level (easy, medium, hard)
  
### Hackathon Listing
- **Search**: Search hackathons by name.
- **Sort**: Sort hackathons by newest first or oldest first.
- **Filter**: Filter hackathons by difficulty level (easy, medium, hard) or status (active, upcoming, past).
- **Status Indicators**:
  - **Active**: Displays a countdown timer to indicate when the hackathon will end.
  - **Upcoming**: Displays a countdown timer to indicate when the hackathon will start.
  - **Past**: Displays the start and end date of the hackathon.
  
### Hackathon Details Page
- **View Hackathon Details**: Clicking on a hackathon in the list will take the user to a detailed page with all the hackathon information.
- **Edit/Delete Buttons**: On the hackathon details page, organizers can edit or delete the hackathon.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hackathon-dashboard-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd hackathon-dashboard-app
   ```

3. **Install dependencies**:
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

4. **Run the development server**:
   Start the app using the following command:
   ```bash
   npm start
   ```
   The app will be available on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Create Hackathons**: Use the dashboard to create new hackathons by filling in the required fields (name, dates, description, image, and level).
2. **View Hackathons**: See a list of all created hackathons, with options to sort, filter, and search.
3. **Manage Hackathons**: Organizers can edit or delete existing hackathons from the list or the detailed view page.
4. **Timers**: Active and upcoming hackathons will display timers indicating time until the end or start.

## Project Structure

```
├── src
│   ├── components
│   │   ├── HackathonList.jsx      # Component to display the list of hackathons
│   │   ├── HackathonDetails.jsx   # Component to display hackathon details
│   │   └── HackathonForm.jsx      # Component for creating/editing hackathons
│   ├── utils
│   │   └── timer.js               # Utility to handle countdown timers
│   ├── assets
│   │   └── images                 # Directory for hackathon images
│   ├── App.jsx                    # Main application file
│   ├── index.js                   # Entry point
├── public
│   └── index.html                 # HTML template
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation
```

## Technologies Used

- **React.js**: For building the user interface and components.
- **CSS**: For styling the app.
- **JavaScript**: For app logic and timer functionalities.
- **HTML**: For structuring the app.

## Future Enhancements

- **Participant Dashboard**: Allow participants to register and submit solutions to hackathons.
- **User Authentication**: Secure access for organizers and participants.
- **Backend Integration**: Connect the app to a backend service to persist data.

## License

This project is licensed under the MIT License.

---

Feel free to fork and improve this project. Contributions are welcome!
