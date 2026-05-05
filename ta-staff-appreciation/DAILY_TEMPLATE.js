// ============================================================
// DAILY UPDATE TEMPLATE
//
// Copy this entire block, paste it into index.html replacing the
// existing CONFIG = { ... } block, and fill in the values.
// Then save, commit, and push.
// ============================================================

const CONFIG = {
  dayNumber: 0,                      // bump each day (2, 3, 4, 5)
  date: "",                          // e.g. "Wednesday, May 6"

  // Today's clue. Keep the backticks. Use:
  //   <strong>...</strong>  for bold
  //   <em>...</em>          for italic
  //   <br><br>              for paragraph breaks
  todayBlurb: ``,

  submitLink: "",                    // Google Form URL
  deadline: "by 2:00 PM today",      // when guesses are due

  yesterdayTrivia: {
    revealedTeacher: "",             // e.g. "Ms. Serrano"
    winnerName: "",                  // student name
    winnerGrade: "",                 // e.g. "Grade 11"
    ticketImage: ""                  // URL or "tickets/file.jpg" or "" for placeholder
  },

  yesterdayRaffle: {
    teacherWinner: "",               // teacher whose name was drawn
    prizeWon: "",                    // e.g. "$50 Batson River Voucher"
    ticketImage: ""                  // URL or "tickets/file.jpg" or "" for placeholder
  }
};
