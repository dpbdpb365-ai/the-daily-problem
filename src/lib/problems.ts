export const dailyProblems = [
    {
      id: "champions-dilemma",
      date: "2026-09-27", 
      displayDate: "Sep 27",
      title: "The Champion's Dilemma",
      context: "You are playing a dice tournament against an opponent where the highest roll wins the round (ties are re-rolled until someone wins). You must choose between two paths to become the champion:",
      options: [
        "Option A: You play with a loaded die (faces are 4, 4, 5, 5, 6, 6). To be the champion, you must win 3 consecutive rounds.",
        "Option B: You play with a normal die (1 to 6). To be the champion, you only need to win 1 sudden-death round."
      ],
      question: "What is the exact probability of winning the tournament with the best option? (Enter your answer as a percentage)",
      answer: "51.2",
      hint: "First, calculate the probability of Option A winning a *single* round. Remember that a tie doesn't count as a loss; it simply forces a re-roll. What's your real win rate per round when you exclude the ties from the total possible outcomes?",
      successMessage: "Correct! 51.2% is the exact probability. You successfully calculated the win rate of the loaded die accounting for ties.",
      plays: "45K+" // <--- Número inventado de tráfico
    },
    {
      id: "desert-chase", 
      date: "2026-09-28", 
      displayDate: "Sep 28",
      title: "The Desert Chase",
      context: "A jeep with a full tank of gas can travel 500 miles. You have a limitless supply of jeeps at your base camp, but they can only transfer gas to each other.",
      options: [
        "The jeeps can transfer any amount of gas instantly when they meet.",
        "You must leave no stranded jeeps in the desert."
      ],
      question: "What is the minimum number of jeeps that must leave the base camp to deliver one jeep exactly 750 miles into the desert?",
      answer: "3",
      hint: "Think about sending jeeps out in a convoy. If one gives part of its fuel to the others and turns back just in time to make it home, how far can the rest go?",
      successMessage: "Correct! You need 3 jeeps. Jeep 1 turns back early, Jeep 2 turns back midway, leaving the final jeep with enough fuel to reach 750 miles.",
      plays: "32K+"
    },
    {
        id: "patient-zero", 
        date: "2026-09-26", 
        displayDate: "Sep 26",
        title: "Patient Zero",
        context: "A rare virus affects 1 in 10,000 people. You take an excellent test: if you have the virus, it detects it 100% of the time. However, it has a margin of error: if you are healthy, there is a 5% chance of getting a 'false positive'. You take the test at random.",
        options: [
          "Test Result: POSITIVE"
        ],
        question: "What is the approximate probability (in percentage, rounded to one decimal) that you actually have the virus?",
        answer: "0.2",
        hint: "Imagine a town of 10,000 people taking the test. Don't just focus on the 1 sick person—how many healthy people will also receive a positive result?",
        successMessage: "Correct! ~0.2%. There will be about 500 false positives for every 1 true positive, meaning a positive test still leaves you with a 99.8% chance of being perfectly healthy.",
        plays: "58K+"
      },
      {
        id: "beautiful-game", 
        date: "2026-10-02", 
        displayDate: "Oct 2",
        title: "The Beautiful Game",
        context: "A standard soccer ball is covered with stitched panels. It has exactly 12 pentagonal panels, which are joined together by a certain number of hexagonal panels. Here are the rules of its geometry:",
        options: [
          "Each pentagon is connected to exactly 5 hexagons.",
          "Each hexagon is connected to exactly 3 pentagons and 3 hexagons."
        ],
        question: "How many hexagonal panels does the soccer ball have?",
        answer: "20",
        hint: "Think about the pentagon to hexagon ratio",
        successMessage: "Correct! 12 pentagons × 5 borders = 60 shared borders. Since each hexagon touches exactly 3 pentagons, you divide 60 by 3 to get 20 hexagons.",
        plays: "41K+"
      },
      {
        id: "inscribed-rhombus", 
        date: "2026-10-03", 
        displayDate: "Oct 3",
        title: "The Inscribed Rhombus",
        context: "A perfect circle has a radius of 10. Inside this circle, a square is perfectly inscribed so its corners touch the circle. Inside that square, a rhombus is inscribed by connecting the exact midpoints of the square's four sides.",
        imageUrl: "/rhombus.svg",
        options: [
          "All shapes are perfectly symmetrical."
        ],
        question: "What is the exact area of the blue rhombus?",
        answer: "100",
        hint: "The diameter of the circle is the diagonal of the square. Once you find the area of the square, think about how much space a rhombus formed by midpoints takes up compared to its bounding box.",
        successMessage: "Correct! The circle's diameter is 20, making the square's area 200. Connecting the midpoints cuts that area exactly in half, giving the rhombus an area of 100.",
        plays: "38K+"
      },
      {
        id: "bridge-bottleneck", 
        date: "2026-10-04", 
        displayDate: "Oct 4",
        title: "The Bridge Bottleneck",
        context: "A drone is monitoring a bridge that is exactly 1,200 meters long. The traffic flows steadily. On average, a new car enters the bridge every 2 seconds, and at any given moment, there is an average of 30 cars actively crossing the bridge.",
        options: [
          "Assume a constant flow rate and average speed for all vehicles."
        ],
        question: "According to Little's Law, what is the average speed of the cars in meters per second (m/s)?",
        answer: "20",
        hint: "Little's Law states that Average Items = Arrival Rate × Average Time. Find the average time a car spends on the bridge first.",
        successMessage: "Correct! With 0.5 cars entering per second and 30 cars on the bridge, the average crossing time is 60 seconds. 1,200 meters / 60 seconds = 20 m/s.",
        plays: "45K+"
      },
      {
        id: "the-million-dollar-vault", 
        date: "2026-10-05", 
        displayDate: "Oct 5",
        title: "The Million Dollar Vault",
        context: "A TV game show offers a $1,000,000 prize if you can open a vault with a 3-digit combination lock (000 to 999). Every attempt you make costs you $1,000 out of pocket. You buy a piece of inside information: the correct combination contains at least two identical consecutive digits (like '112', '588', or '777').",
        options: [
          "You keep track of your guesses so you never try the same combination twice."
        ],
        question: "If you play systematically until you open the vault, what is the absolute minimum profit (in dollars) you are guaranteed to walk away with?",
        answer: "810000",
        hint: "Think about the absolute worst-case scenario. If your luck is terrible, the right answer will be the very last combination you try. How many total combinations follow the 'two consecutive digits' rule?",
        successMessage: "Correct! $810,000. There are 190 possible combinations (90 for AAB, 90 for BAA, and 10 for AAA). In the absolute worst-case scenario, it takes you 190 tries to win. 190 tries × $1,000 = $190,000 in costs. $1,000,000 - $190,000 leaves you with exactly $810,000 guaranteed profit.",
        plays: "52K+"
      },
      {
        id: "the-handshake", 
        date: "2026-10-06", 
        displayDate: "Oct 6",
        title: "The Diplomat's Party",
        context: "There are exactly 100 diplomats at a highly exclusive gathering. Protocol dictates that before the dinner begins, every single person must shake hands with every other person exactly once.",
        options: [
          "No one shakes their own hand, and no two people shake hands more than once."
        ],
        question: "What is the total number of handshakes that will occur?",
        answer: "4950",
        hint: "The first person shakes hands with 99 people. The second person has already shaken the first person's hand, so they shake hands with 98 new people. Is there a formula for this sum?",
        successMessage: "Correct! The formula is n(n-1)/2. 100 × 99 / 2 = 4,950 handshakes.",
        plays: "60K+"
      },
      {
        id: "patient-cluster", 
        date: "2026-10-07", 
        displayDate: "Oct 7",
        title: "The Viral Cluster",
        context: "An epidemiologist is studying an outbreak in a closed facility with exactly 100 infected patients. The symptom breakdown is: 70 patients have a cough, 75 have a fever, 80 have fatigue, and 85 have lost their sense of smell.",
        options: [
          "No other symptoms were recorded."
        ],
        question: "What is the absolute minimum number of patients that must inevitably be experiencing all four symptoms simultaneously?",
        answer: "10",
        hint: "Instead of counting the symptoms they have, count the symptoms they lack. If you distribute the 'missing' symptoms to as many different people as possible, how many people are left untouched by the absences?",
        successMessage: "Correct! 10 patients. 30 lack a cough, 25 lack a fever, 20 lack fatigue, and 15 lack smell. The maximum number of people missing at least one symptom is 90. The remaining 10 must have all four.",
        plays: "48K+"
      },
      {
        id: "diagonal-packing", 
        date: "2026-10-08", 
        displayDate: "Oct 8",
        title: "Diagonal Packing",
        context: "A square bounds three identical solid circles of radius 10. They are packed tightly along the square's main diagonal. The first circle touches the bottom and right edges of the square. The second circle touches the first and third. The third circle touches the top and left edges.",
        imageUrl: "/packing.svg",
        options: [
          "The circles are completely contained within the square."
        ],
        question: "What is the area of the empty space inside the square? (Round your answer to the nearest whole number)",
        answer: "1389",
        hint: "First find the length of the square's diagonal. You know the radius is 10, so the distance between the centers is easy. For the corners, draw a smaller square using the radius to find the distance from the circle's center to the square's vertex.",
        successMessage: "Correct! The square's side length is roughly 48.28, making its area ~2331. Subtracting the area of the 3 circles (~942) leaves exactly 1389.",
        plays: "29K+"
      },
      {
        id: "the-rendezvous", 
        date: "2026-10-09", 
        displayDate: "Oct 9",
        title: "The Rendezvous",
        context: "Two spies agree to meet at a park bench between 8:00 AM and 9:00 AM. They will each arrive at a completely random time within that hour. They also agree to wait exactly 15 minutes for the other person before leaving.",
        options: [
          "If the other person arrives while they are waiting, they successfully meet."
        ],
        question: "What is the exact probability (in percentage) that they will successfully meet?",
        answer: "43.75",
        hint: "Graph it. Make the x-axis Person A's arrival time (0-60) and the y-axis Person B's. The total area is a 60x60 square. The successful meeting times form a band through the center where the difference between x and y is 15 or less.",
        successMessage: "Correct! 43.75%. The area where they don't meet consists of two triangles in the corners of your 60x60 grid. Calculating the remaining area gives 7/16, or 43.75%.",
        plays: "33K+"
      },
      {
        id: "the-interception", 
        date: "2026-10-10", 
        displayDate: "Oct 10",
        title: "The Interception",
        context: "A police car is exactly 20 km directly West of a thief. At the exact same moment, the thief speeds away in a straight line heading strictly Northwest (135 degrees) at a constant 100 km/h. The police car drives in a straight line strictly North to intercept him.",
        options: [
          "Assume flat terrain and instant acceleration."
        ],
        question: "At what exact speed (in km/h, rounded to one decimal place) must the police car travel to hit the exact interception point at the same time as the thief?",
        answer: "70.7",
        hint: "Break the thief's speed into X and Y coordinates. How much of that 100 km/h is moving West, and how much is moving North? The police only need to match his Northward speed since they start exactly on his path.",
        successMessage: "Correct! 70.7 km/h. The thief's movement forms a 45-45-90 triangle. His Northward speed is 100 × sin(45°), which equals exactly 50√2, or ~70.7 km/h.",
        plays: "41K+"
      },
      {
        id: "the-draw", 
        date: "2026-10-11", 
        displayDate: "Oct 11",
        title: "The Unfair Draw",
        context: "You are given 100 blue marbles, 100 red marbles, and 2 empty black bags. You can divide the marbles between the two bags in any way you choose, but all 200 marbles must be used. An opponent will then pick one bag at random and blindly draw one marble.",
        options: [
          "You want the opponent to draw a blue marble."
        ],
        question: "If you distribute the marbles optimally, what is the maximum possible probability (in percentage, rounded to one decimal) of drawing a blue marble?",
        answer: "99.7",
        hint: "Don't divide them evenly. What if you make one bag an absolute guarantee to win, and put the rest in the other bag?",
        successMessage: "Correct! 99.7%. Put exactly 1 blue marble in the first bag (100% chance), and the remaining 199 marbles in the second bag (99/199 = ~49.7% chance). Averaging the two bags gives ~99.74%.",
        plays: "75K+"
      },
      {
        id: "the-broken-string", 
        date: "2026-10-12", 
        displayDate: "Oct 12",
        title: "The Broken String",
        context: "You have a single piece of string. You make two cuts at completely random points along its length, dividing it into three separate pieces.",
        options: [
          "The cuts are made independently and uniformly at random."
        ],
        question: "What is the exact probability (in percentage) that you can form a valid triangle with the three resulting pieces?",
        answer: "25",
        hint: "Think about the fundamental rule of triangles: What is the maximum length of the longest piece relative to the sum of the other two pieces?",
        successMessage: "Correct! 25%. For a triangle to form, no single piece can be 50% or more of the original length. If you plot the possible cut combinations, exactly 1/4 of them satisfy this rule.",
        plays: "37K+"
      }
  ]