const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();  
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

// Nodemailer Setup
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "innovationmindcraft@gmail.com",
    pass: "MuqeemAskari.",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email Setup Error:", error);
  } else {
    console.log("Email Service Ready");
  }
});

// API Route
router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  const mail = {
    from: name,
    to: "innovationmindcraft@gmail.com", // Replace with your email to receive messages
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong><br>${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email Error:", error);
      res.status(500).json({ code: 500, status: "Failed to send message" });
    } else {
      console.log("Email Sent Successfully");
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
