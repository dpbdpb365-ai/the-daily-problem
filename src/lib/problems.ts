export const dailyProblems = [
  {
    id: "001-champions-dilemma",
    date: "2026-11-02", 
    displayDate: "Nov 2",
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
    solution: "Step 1: Calculate the loaded die's win rate per round. Out of 36 possible outcomes against a normal die, the loaded die wins 24 times, ties 6 times, and loses 6 times. Step 2: Since ties force a re-roll, we remove them from the equation. The probability of winning a decisive round is 24 wins out of 30 non-tie games (24/30), which simplifies to an 80% (0.8) win rate per round. Step 3: To become the champion with Option A, you must win 3 consecutive rounds. We multiply the probabilities: 0.8 × 0.8 × 0.8 = 0.512. Therefore, Option A gives you a 51.2% chance of winning the tournament, making it slightly better than Option B's flat 50%. The correct answer is 51.2.",
    plays: "45K+"
  },
  {
    id: "002-desert-chase",
    date: "2026-11-03",
    displayDate: "Nov 3",
    title: "Desert Chase",
    context: "A suspect is spotted on a flat desert highway exactly 40 miles due East of a police station. The suspect suddenly speeds off due North at exactly 60 mph.",
    options: [
      "The police cruiser immediately departs the station, traveling in a straight diagonal line across the open desert floor at a constant 120 mph to intercept."
    ],
    question: "At what exact angle (in degrees North of due East) must the police cruiser travel to perfectly intercept the suspect?",
    answer: "30",
    hint: "Don't worry about the 40-mile distance or how long the chase takes. Think about the ratio of their speeds. If you form a right triangle, the hypotenuse is the police path. How does it compare to the suspect's path?",
    successMessage: "Correct! 30 degrees. The distance is a red herring. Since the police travel twice as fast as the suspect (120 vs 60), the hypotenuse of the chase triangle will always be twice as long as the opposite side. A right triangle with these proportions always has a 30-degree angle (sin(30°) = 0.5).",
    solution: "Let's visualize the chase as a right-angled triangle. The police station is the starting point, the suspect's path north is the opposite side, and the police cruiser's diagonal interception path is the hypotenuse. The initial 40-mile distance doesn't actually matter. What matters is the ratio of their speeds. Since the police travel exactly twice as fast as the suspect (120 mph vs 60 mph), the distance they cover (the hypotenuse) will always be exactly twice as long as the distance the suspect covers (the opposite side). In trigonometry, a right triangle where the opposite side is exactly half the hypotenuse always has an angle whose sine is 0.5. The angle whose sine is 0.5 is 30 degrees. The exact angle is 30.",
    plays: "New"
  },
  {
    id: "003-patient-zero", 
    date: "2026-11-04", 
    displayDate: "Nov 4",
    title: "Patient Zero",
    context: "A rare virus affects 1 in 10,000 people. You take an excellent test: if you have the virus, it detects it 100% of the time. However, it has a margin of error: if you are healthy, there is a 5% chance of getting a 'false positive'. You take the test at random.",
    options: [
      "Test Result: POSITIVE"
    ],
    question: "What is the approximate probability (in percentage, rounded to one decimal) that you actually have the virus?",
    answer: "0.2",
    hint: "Imagine a town of 10,000 people taking the test. Don't just focus on the 1 sick person—how many healthy people will also receive a positive result?",
    successMessage: "Correct! ~0.2%. There will be about 500 false positives for every 1 true positive, meaning a positive test still leaves you with a 99.8% chance of being perfectly healthy.",
    solution: "To solve this, let's look at a hypothetical population of 10,000 people. Statistically, exactly 1 person in this group has the rare virus. Because the test is 100% accurate for infected people, this 1 sick person will test positive. However, there are 9,999 healthy people. With a 5% false-positive rate, about 500 of these healthy people (9,999 × 0.05) will also test positive. If you receive a positive result, you are just one of the 501 total people who tested positive (1 sick + 500 healthy). Your chance of actually having the virus is 1 out of 501, which is approximately 0.00199. Converted to a percentage, the probability is 0.2.",
    plays: "58K+"
  },
  {
    id: "004-beautiful-game", 
    date: "2026-11-05", 
    displayDate: "Nov 5",
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
    solution: "Let's count the shared borders between the panels. A soccer ball has 12 pentagons. Every pentagon has 5 sides, and the rules state each pentagon is connected to 5 hexagons. This means there are a total of 60 borders (12 × 5) where a pentagon meets a hexagon. Now, let's look at the hexagons. The rules state that each hexagon connects to exactly 3 pentagons. Since all 60 pentagon-hexagon borders must be shared with the hexagons, and each hexagon takes exactly 3 of these borders, we just divide the total borders by 3. 60 divided by 3 equals 20. The ball has exactly 20 hexagonal panels.",
    plays: "41K+"
  },
  {
    id: "005-inscribed-rhombus", 
    date: "2026-11-06", 
    displayDate: "Nov 6",
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
    solution: "Let's work from the outside in. The circle has a radius of 10, so its diameter is 20. Because the square is perfectly inscribed in the circle, the diagonal of the square is equal to the circle's diameter (20). The area of a square can be calculated as (diagonal² / 2). So, 20² / 2 = 400 / 2 = 200. The square's area is 200. Now for the rhombus: when you inscribe a shape by connecting the exact midpoints of a square's sides, the new shape always has exactly half the area of the outer square. Half of 200 is 100. The area of the blue rhombus is exactly 100.",
    plays: "38K+"
  },
  {
    id: "006-bridge-bottleneck", 
    date: "2026-11-07", 
    displayDate: "Nov 7",
    title: "Rush Hour Crossing",
    context: "A drone is monitoring a bridge that is exactly 1,200 meters long. The traffic flows steadily. On average, a new car enters the bridge every 2 seconds, and at any given moment, there is an average of 30 cars actively crossing the bridge.",
    options: [
      "Assume a constant flow rate and average speed for all vehicles."
    ],
    question: "What is the average speed of the cars in meters per second (m/s)?",
    answer: "20",
    hint: "Find the average time a car spends on the bridge first.",
    successMessage: "Correct! With 0.5 cars entering per second and 30 cars on the bridge, the average crossing time is 60 seconds. 1,200 meters / 60 seconds = 20 m/s.",
    solution: "Total Items = Arrival Rate × Average Time. We know there are exactly 30 cars on the bridge at any time (Total Items = 30), and 1 car enters every 2 seconds, meaning the arrival rate is 0.5 cars per second (Arrival Rate = 0.5). Plugging this into the formula: 30 = 0.5 × Time. Solving for Time, we find that the average car spends exactly 60 seconds crossing the bridge. Since the bridge is 1,200 meters long, we divide distance by time (1,200 meters / 60 seconds) to find the speed. The average speed is exactly 20.",
    plays: "45K+"
  },
  {
    id: "007-the-million-dollar-vault", 
    date: "2026-11-08", 
    displayDate: "Nov 8",
    title: "The Million Dollar Vault",
    context: "A TV game show offers a $1,000,000 prize if you can open a vault with a 3-digit combination lock (000 to 999). Every attempt you make costs you $1,000 out of pocket. You buy a piece of inside information: the correct combination contains at least two identical consecutive digits (like '112', '588', or '777').",
    options: [
      "You keep track of your guesses so you never try the same combination twice."
    ],
    question: "If you play systematically until you open the vault, what is the absolute minimum profit (in dollars) you are guaranteed to walk away with?",
    answer: "810000",
    hint: "Think about the absolute worst-case scenario. If your luck is terrible, the right answer will be the very last combination you try. How many total combinations follow the 'two consecutive digits' rule?",
    successMessage: "Correct! $810,000. There are 190 possible combinations (90 for AAB, 90 for BAA, and 10 for AAA). In the absolute worst-case scenario, it takes you 190 tries to win. 190 tries × $1,000 = $190,000 in costs. $1,000,000 - $190,000 leaves you with exactly $810,000 guaranteed profit.",
    solution: "First, let's find out how many combinations contain at least two identical consecutive digits. There are three possible patterns: AAB, BAA, and AAA. For AAB, there are 10 choices for 'A' and 9 choices for 'B' (since B must be different), giving 90 combinations. For BAA, there are also 90 combinations. For AAA, there are exactly 10 combinations (000 to 999). This gives a total of 190 possible combinations. To find the guaranteed minimum profit, we must assume the absolute worst-case scenario: you guess wrong 189 times and get it right on the 190th try. 190 attempts will cost you $190,000 (190 × $1,000). Subtracting this cost from the $1,000,000 prize leaves you with a guaranteed minimum profit of 810000.",
    plays: "52K+"
  },
  {
    id: "008-the-dealers-whisper",
    date: "2026-11-09",
    displayDate: "Nov 9",
    title: "The Dealer's Whisper",
    context: "You are dealt exactly two cards face-down from a freshly shuffled standard 52-card deck.",
    options: [
      "The dealer peeks at both of your cards without revealing them.",
      "He truthfully announces to the entire table: 'You hold at least one Ace.'",
      "He then offers you a side bet that you have Pocket Aces (meaning both of your cards are Aces)."
    ],
    question: "What is the exact mathematical probability that you will win this bet? (Enter your answer as a simplified fraction, e.g., x/xx)",
    answer: "1/33",
    hint: "'Card 1 is an Ace' is a completely different mathematical scenario than 'At least one of the two cards is an Ace.'",
    successMessage: "Correct! 1/33. If the dealer had physically flipped one specific card over to show an Ace, your odds would indeed be 3/51 (1/17). But by aggregating the information ('at least one'), the sample space changes entirely, almost halving your odds!",
    solution: "This is a beautiful conditional probability trap. Intuition screams: 'One card is an Ace, so there are 51 cards left in the deck and 3 of them are Aces. The answer is 3/51 (which simplifies to 1/17).' That is wrong. The dealer didn't specify WHICH card was the Ace; he evaluated the hand as a whole. Let's look at the actual combinations. Total possible 2-card hands from a deck: (52 × 51) / 2 = 1,326. Hands with exactly two Aces: (4 × 3) / 2 = 6. Hands with exactly one Ace: 4 Aces × 48 non-Aces = 192. Therefore, there are 198 total hands that contain 'at least one Ace' (192 + 6). Because of the dealer's statement, you know you are in one of those 198 possible universes. Out of those 198, only 6 are Pocket Aces. 6 / 198 simplifies exactly to 1/33.",
    plays: "New",
    "top": true
  },
  {
    id: "009-the-handshake", 
    date: "2026-11-10", 
    displayDate: "Nov 10",
    title: "The Diplomat's Party",
    context: "There are exactly 100 diplomats at a highly exclusive gathering. Protocol dictates that before the dinner begins, every single person must shake hands with every other person exactly once.",
    options: [
      "No one shakes their own hand, and no two people shake hands more than once."
    ],
    question: "What is the total number of handshakes that will occur?",
    answer: "4950",
    hint: "The first person shakes hands with 99 people. The second person has already shaken the first person's hand, follow the pattern.",
    successMessage: "Correct! The formula is n(n-1)/2. 100 × 99 / 2 = 4,950 handshakes.",
    solution: "Let's trace the handshakes. The first diplomat shakes hands with the other 99 people. The second diplomat has already shaken hands with the first, so they only need to shake hands with the remaining 98 people. The third shakes hands with 97, and so on, down to the last person who has already shaken everyone's hand. We need to calculate the sum of 99 + 98 + 97 ... + 1. The mathematical formula for the sum of consecutive integers is n(n+1)/2, where n is the highest number. So, (99 × 100) / 2 = 9,900 / 2 = 4,950. Alternatively, think of it this way: 100 people each shake 99 hands (9,900), but since it takes two people to make one handshake, we divide by 2. The total number of handshakes is 4950.",
    plays: "60K+"
  },
  {
    id: "010-patient-cluster", 
    date: "2026-11-11", 
    displayDate: "Nov 11",
    title: "The Viral Cluster",
    context: "An epidemiologist is studying an outbreak in a closed facility with exactly 100 infected patients. The symptom breakdown is: 70 patients have a cough, 75 have a fever, 80 have fatigue, and 85 have lost their sense of smell.",
    options: [
      "No other symptoms were recorded."
    ],
    question: "What is the absolute minimum number of patients that must inevitably be experiencing all four symptoms simultaneously?",
    answer: "10",
    hint: "Instead of counting the symptoms they have, count the symptoms they lack.",
    successMessage: "Correct! 10 patients. 30 lack a cough, 25 lack a fever, 20 lack fatigue, and 15 lack smell. The maximum number of people missing at least one symptom is 90. The remaining 10 must have all four.",
    solution: "The easiest way to find the minimum overlap is to look at who is *missing* symptoms rather than who has them. Out of 100 patients, 30 lack a cough (100 - 70), 25 lack a fever (100 - 75), 20 lack fatigue (100 - 80), and 15 lack smell (100 - 85). To minimize the number of people with all four symptoms, we must assume these missing symptoms are distributed among as many different patients as possible. If we add up all the 'missing' symptoms (30 + 25 + 20 + 15), we get 90. In the most extreme case, 90 completely different people are each missing exactly one symptom. This leaves exactly 10 patients (100 - 90) who missed out on the 'missing' symptoms. Therefore, those 10 people must have all four symptoms. The answer is 10.",
    plays: "48K+"
  },
  {
    "id": "011-diagonal-packing", 
    "date": "2026-11-12", 
    "displayDate": "Nov 12",
    "title": "Diagonal Packing",
    "context": "Three identical solid circles of radius 10 are packed tightly along the main diagonal of a square.",
    "imageUrl": "/packing.svg",
    "options": [
      "All circles are perfectly tangent to each other and the boundaries of the square."
    ],
    "question": "What is the area of the empty space inside the square? (Round to the nearest whole number)",
    "answer": "1389",
    "hint": "Pythagoras all the way",
    "successMessage": "Correct! The square's side length is 20 + 20√2 (≈48.28), making its area ≈2331. Subtracting the 3 circles (~942) leaves 1389.",
    "solution": "1. Find the square's diagonal: The distance between the centers of the two outer circles is 40. The distance from an outer circle's center to the square's corner forms a right triangle with sides 10 and 10, making its hypotenuse 10√2. The total diagonal is 40 + 20√2.\n2. Find the square's side: Side = Diagonal / √2 = (40 / √2) + 20 = 20√2 + 20.\n3. Calculate areas: Square Area = (20 + 20√2)² = 1200 + 800√2 ≈ 2331.37. Circle Area = 3 × π × 10² = 300π ≈ 942.48.\n4. Subtract: 2331.37 - 942.48 ≈ 1388.89. Rounded to the nearest whole number, it is 1389.",
    "plays": "29K+"
  },
  {
    id: "012-the-rendezvous", 
    date: "2026-11-13", 
    displayDate: "Nov 13",
    title: "The Rendezvous",
    context: "Two spies agree to meet at a park bench between 8:00 AM and 9:00 AM. They will each arrive at a completely random time within that hour. They also agree to wait exactly 15 minutes for the other person before leaving.",
    options: [
      "If the other person arrives while they are waiting, they successfully meet."
    ],
    question: "What is the exact probability (in percentage with two decimals) that they will successfully meet?",
    answer: "43.75",
    hint: "You can graph with two axes or look at expected values for different arrival time segments",
    successMessage: "Correct! 43.75%. The area where they don't meet consists of two triangles in the corners of your 60x60 grid. Calculating the remaining area gives 7/16, or 43.75%.",
    solution: "We can solve this geometrically. Imagine a 60x60 grid where the X-axis is Person A's arrival minute (0 to 60) and the Y-axis is Person B's. The total area of all possible arrival times is 3,600 (60 × 60). They will successfully meet if the difference between their arrival times is 15 minutes or less. On our graph, the times they *fail* to meet form two large triangles in the top-left and bottom-right corners. These triangles represent one person arriving more than 15 minutes after the other. Each triangle has a base and height of 45 (60 - 15). The area of one triangle is (45 × 45) / 2, so the combined area of both 'failure' triangles is 2,025. Subtracting this from the total area (3,600 - 2,025) leaves a 'success' area of 1,575. To find the probability, we divide 1,575 by 3,600, which gives 0.4375. The exact probability is 43.75.",
    plays: "33K+"
  },
  {
    id: "013-the-interception", 
    date: "2026-11-14", 
    displayDate: "Nov 14",
    title: "The Interception",
    context: "A police car is exactly 20 km directly West of a thief. At the exact same moment, the thief speeds away in a straight line heading strictly Northwest (135 degrees) at a constant 100 km/h. The police car drives in a straight line strictly North to intercept him.",
    "imageUrl": "/013-the-interception.svg",
    options: [
      "Assume flat terrain and instant acceleration."
    ],
    question: "At what exact speed (in km/h, rounded to one decimal place) must the police car travel to hit the exact interception point at the same time as the thief?",
    answer: "70.7",
    hint: "Break the thief's speed into X and Y coordinates. How much of that 100 km/h is moving West, and how much is moving North? The police only need to match his Northward speed since they start exactly on his path.",
    successMessage: "Correct! 70.7 km/h. The thief's movement forms a 45-45-90 triangle. His Northward speed is 100 × sin(45°), which equals exactly 50√2, or ~70.7 km/h.",
    solution: "The key to this problem is breaking down the thief's diagonal speed into its North and West components using a right triangle. Since he travels Northwest (exactly 135 degrees, or 45 degrees relative to West/North), his path forms a 45-45-90 triangle. His total speed is the hypotenuse (100 km/h). To find his Northward speed, we calculate 100 × sin(45°), which equals exactly 50√2, or approximately 70.71 km/h. Because the police car starts directly South of his path and only moves North, it doesn't need to chase him Westward; it only needs to match his Northward speed to intercept him on the Y-axis exactly as he crosses it. Therefore, the police car must travel at exactly 70.7 km/h.",
    plays: "41K+",
    "top": true
  },
  {
    id: "014-the-draw", 
    date: "2026-11-15", 
    displayDate: "Nov 15",
    title: "The Unfair Draw",
    context: "You are given 100 blue marbles, 100 red marbles, and 2 empty black bags. You can divide the marbles between the two bags in any way you choose, but all 200 marbles must be used. An opponent will then pick one bag at random and blindly draw one marble.",
    options: [
      "You want the opponent to draw a blue marble."
    ],
    question: "If you distribute the marbles optimally, what is the maximum possible probability (in percentage, rounded to one decimal) of drawing a blue marble?",
    answer: "74.9",
    hint: "Don't divide them evenly.",
    successMessage: "Correct! 74.9%. Put exactly 1 blue marble in the first bag (100% chance), and the remaining 199 marbles in the second bag (99/199 = ~49.7% chance). Averaging the probabilities of the two bags gives ~74.9%.",
    solution: "To maximize your chances, you shouldn't divide the marbles evenly. You want to make one bag an absolute mathematical certainty, and leave the second bag with the highest possible odds. If you put exactly 1 blue marble in the first bag and nothing else, anyone who picks that bag has a 100% chance of drawing blue. You then put the remaining 199 marbles (99 blue, 100 red) into the second bag. If the opponent picks the second bag, their chance of drawing blue is 99 out of 199 (approx 49.74%). Since the opponent has a 50% chance of picking either bag, we average the two probabilities: (100% + 49.74%) / 2 = 74.87%. Rounded to one decimal, the maximum probability is 74.9.",
    plays: "75K+"
  },
  {
    id: "015-the-broken-string", 
    date: "2026-11-16", 
    displayDate: "Nov 16",
    title: "The Broken String",
    context: "You have a single piece of string. You make two cuts at completely random points along its length, dividing it into three separate pieces.",
    options: [
      "The cuts are made independently and uniformly at random."
    ],
    question: "What is the exact probability (in percentage) that you can form a valid triangle with the three resulting pieces?",
    answer: "25",
    hint: "Think about the fundamental rule of triangles: What is the maximum length of the longest piece relative to the sum of the other two pieces?",
    successMessage: "Correct! 25%. For a triangle to form, no single piece can be 50% or more of the original length. If you plot the possible cut combinations, exactly 1/4 of them satisfy this rule.",
    solution: "For any three line segments to form a valid triangle, they must follow the Triangle Inequality Theorem: the sum of the lengths of any two segments must be greater than the length of the third. In the context of a single string, this means no single piece can be 50% or longer than the original string. If we plot the two random cuts on a coordinate plane, all possible cut combinations form a right triangle. The combinations where one piece is longer than 50% form three smaller triangles at the corners of our graph. These 'invalid' combinations take up exactly 3/4 of the total area. The remaining area in the center represents the valid combinations, leaving exactly a 1/4 or 25% chance of forming a triangle. The answer is 25.",
    plays: "37K+"
  },
  {
    id: "016-the-trampoline-garden",
    date: "2026-11-17",
    displayDate: "Nov 17",
    title: "The Trampoline Garden",
    context: "You just bought a piece of land for your garden shaped as a right-angled triangle. Its sides measure exactly 15, 20, and 25 meters.",
    options: [
      "You want to install the largest possible circular trampoline right in the center."
    ],
    question: "What is the diameter (in meters) of your new trampoline?",
    answer: "10",
    hint: "Calculate the total area of the garden first. Then, imagine drawing lines from the exact center of the trampoline to the three corners of the yard.",
    successMessage: "Correct! The diameter is 10. The garden's total area is 150. Splitting it into three smaller triangles from the center gives an area formula of (15r + 20r + 25r) / 2 = 150. Solving for r gives a radius of 5, so the diameter is 10.",
    solution: "To find the largest possible circle (the incircle) that fits inside a right triangle, we can use the area formula. First, calculate the total area of the garden: (base × height) / 2 = (15 × 20) / 2 = 150. Now, imagine a point in the exact center of the trampoline. If you draw lines from this center to the three corners of the garden, you split the garden into three smaller triangles. The height of each of these three triangles is the radius of the trampoline (r). The area of these three triangles combined must equal the total area: (15r/2) + (20r/2) + (25r/2) = 150. Simplifying this gives 30r = 150, meaning the radius is 5. Since the radius is 5, the diameter is exactly 10.",
    plays: "New",
    "top": true
  },
  {
    id: "017-the-silicon-foundry",
    date: "2026-11-18",
    displayDate: "Nov 18",
    title: "The Silicon Foundry",
    context: "A microchip factory steadily ships exactly 60,000 completed chips every 30-day month.",
    options: [
      "Due to the complex and delicate manufacturing process, there are always exactly 24,000 unfinished chips on the assembly line at any given moment."
    ],
    question: "On average, how many days does it take to manufacture a single chip from start to finish?",
    answer: "12",
    hint: "Convert the monthly shipping rate into a daily rate first. Then, ask yourself: how long would it take to clear the entire current inventory on the floor at that daily rate?",
    successMessage: "Correct! 12 days. This is a classic application of Little's Law (Inventory = Rate × Time). The factory outputs 2,000 chips per day. To maintain a constant work-in-process of 24,000 chips, each chip must spend exactly 12 days in the system (24,000 / 2,000).",
    solution: "This is a classic application of Little's Law, which states that Inventory = Flow Rate × Time. First, let's find the daily flow rate. The factory ships 60,000 chips every 30 days, which equals exactly 2,000 chips per day. We know the steady inventory (the chips actively on the assembly line) is always exactly 24,000. To find the time a single chip spends on the line, we rearrange the formula to Time = Inventory / Flow Rate. Dividing 24,000 chips by 2,000 chips per day gives us 12 days. It takes exactly 12 days to manufacture a single chip.",
    plays: "New"
  },
  {
    id: "018-the-grandmaster-invitational",
    date: "2026-11-19",
    displayDate: "Nov 19",
    title: "The Grandmaster Invitational",
    context: "A prestigious single-elimination chess tournament begins with exactly 1,025 competitors.",
    options: [
      "Every match ends with a winner advancing and a loser being eliminated (no draws).",
      "If any round has an odd number of competitors, the highest-ranked player receives a 'bye' and automatically advances to the next round."
    ],
    question: "What is the exact total number of matches that must be played to crown the final champion?",
    answer: "1024",
    hint: "No hint for this one",
    successMessage: "Correct! 1024 matches. The rule about odd numbers and automatic advances is a red herring. Every single match eliminates exactly one player from the tournament. To end up with 1 champion out of 1,025 players, you must eliminate exactly 1,024 people. Therefore, exactly 1,024 matches must be played.",
    solution: "This puzzle is a trap designed to make you do unnecessary complex math with brackets and byes. The secret is to look at the tournament backwards, focusing on the losers instead of the winners. It's a single-elimination tournament, meaning every single match eliminates exactly one person. To get from 1,025 competitors down to exactly 1 undisputed champion, you must eliminate exactly 1,024 people. Since every match eliminates exactly one person, it requires exactly 1,024 matches to complete the tournament. The correct answer is 1024.",
    plays: "New",
    "top": true
  },
  {
    id: "019-the-antibody-pool",
    date: "2026-11-20",
    displayDate: "Nov 20",
    title: "The Antibody Pool",
    context: "A hospital is searching for a rare, life-saving antibody present in exactly one of its 500 patients. Blood tests for this antibody are extremely expensive and take 24 hours to process.",
    options: [
      "To save money, doctors can mix tiny drops of blood from any combination of patients into a single test tube.",
      "Because the antibody is needed immediately, all tests must be prepared and processed simultaneously today."
    ],
    question: "What is the absolute minimum number of tests you must run to mathematically guarantee you find the exact patient with the antibody?",
    answer: "9",
    hint: "Think of each test as a 'Yes/No' signal. If you use 3 tests simultaneously, you can create 8 unique 'Yes/No' patterns by testing different mixtures.",
    successMessage: "Correct! 9 tests. This uses binary logic. Each test gives one bit of information (Positive/Negative). 9 tests can produce 2^9 = 512 unique combinations. By assigning a unique 'recipe' of tests to each of the 500 patients, the final pattern of positive and negative results will point directly to the specific patient.",
    solution: "We can solve this using binary logic and information theory. Each test gives us a simple 'Yes' or 'No' answer, which functions like a binary bit (1 or 0). The goal is to find the minimum number of bits needed to uniquely identify one of 500 patients. If we run 1 test, we can identify 2 combinations. 2 tests give 4 combinations. We need to find the smallest power of 2 that is greater than 500. 2⁸ is 256 (not enough), but 2⁹ is 512. By running exactly 9 tests, we can assign a unique 'recipe' of test tube mixtures to each patient. The final pattern of positive and negative results will act like a 9-digit binary code, pointing directly to the specific patient. The answer is 9.",
    plays: "New",
    "top": true
  },
  {
    id: "020-loser-pays-the-bill",
    date: "2026-11-21",
    displayDate: "Nov 21",
    title: "Loser Pays the Bill",
    context: "Two friends, Leo and Mia, are at a cafe deciding who pays the bill. They agree to let chance handle it, but with a twist.",
    options: [
      "Leo flips exactly two fair coins, and Mia flips exactly three.",
      "If Mia gets strictly more heads than Leo, Leo pays the bill. Otherwise, Mia pays."
    ],
    question: "What is the exact probability (in percentage) that Mia wins the bet?",
    answer: "50",
    hint: "Try ignoring Mia's third coin at first. What are the odds she is winning, losing, or tied after they both flip exactly two coins?",
    successMessage: "Correct! 50%. After two coins each, their chances of being ahead are perfectly symmetrical. The only asymmetrical part is when they tie, which leaves Mia's final coin to act as a pure 50/50 tie-breaker.",
    solution: "We can solve this elegantly using symmetry instead of writing out all 32 possible combinations. Let's ignore Mia's third coin for a moment and only look at their first two flips. Because they both flipped two coins, the probability of Mia having more heads than Leo is exactly identical to Leo having more heads than Mia. These two scenarios cancel each other out. That leaves only the tie-breaker scenario. If they have the exact same number of heads after two flips, the entire game comes down to Mia's third and final coin. She has exactly a 50% chance of flipping a head to break the tie and win. Therefore, her overall probability of winning the bet is exactly 50%.",
    plays: "New",
    "top": true
  },
  {
    id: "021-the-self-aware-code",
    date: "2026-11-22",
    displayDate: "Nov 22",
    title: "The Self-Aware Code",
    context: "A hacker is trying to bypass a security vault that requires a 8-digit passcode. A sticky note on the vault simply says: 'The code describes itself.'",
    options: [
      "The first digit indicates exactly how many 0s are in the passcode.",
      "The second indicates how many 1s, the third how many 2s, And so on."
    ],
    question: "What is the 8-digit passcode?",
    answer: "42101000",
    hint: "Since the 8 digits are counting the total number of digits in the code, the sum of all the digits must exactly equal 8",
    successMessage: "Correct! 42101000. This is known as an 'autobiographical number'. It has exactly two 0s, one 1, two 2s, zero 3s, and zero 4s. Everything balances out perfectly!",
    solution: "We can solve this logically. Since the code counts its own digits, the sum of all the digits must equal the total number of digits (5). If the first digit was 3 (meaning three 0s), the remaining digits would have to sum to 2, which makes it impossible to correctly count the 3 itself without breaking the rule. Let's try starting with 2 (meaning two 0s). This leaves us with three non-zero spots. If we place a 1 in the second position (one 1) and a 2 in the third position (two 2s), we fill the last two spots with 0s. Let's check 21200: it contains two 0s, one 1, two 2s, zero 3s, and zero 4s. It's a perfect match.",
    plays: "New"
  },
  {
    id: "022-the-matryoshka-heist",
    date: "2026-11-23",
    displayDate: "Nov 23",
    title: "The Matryoshka Heist",
    context: "A thief breaks into a billionaire's vault containing exactly 1,000 uniquely sized hollow gold cubes. In a blind rush, he grabs exactly three cubes at random, one after the other.",
    options: [
      "To sneak them past the guards, he needs to nest them perfectly to save space.",
      "This means the second cube must fit inside the first, and the third must fit inside the second."
    ],
    question: "What is the exact probability (expressed as a simplified fraction) that the three cubes he grabbed happen to fit perfectly inside each other in the exact order he picked them?",
    answer: "1/6",
    hint: "Don't let the number 1,000 distract you.",
    successMessage: "Correct! 1/6 (or roughly 16.6%). The number 1,000 is a complete distractor! No matter which 3 cubes he grabs, they will always have 3 distinct sizes (Large, Medium, Small). There are exactly 6 possible ways to order 3 items (3 x 2 x 1). Only one of those orders is strictly decreasing.",
    solution: "This problem uses a classic psychological distractor: the massive pool of 1,000 cubes. It tricks you into trying to calculate massive combinations. But you don't need to. Think exclusively about the 3 cubes the thief actually takes. Since all 1,000 cubes are unique in size, the 3 he picks will definitively be a Large, a Medium, and a Small relative to each other. How many different orders could he have picked them in? There are 3! (3 factorial) permutations: 3 x 2 x 1 = 6 possible sequences (LMS, LSM, MLS, MSL, SLM, SML). Out of those 6 random sequences, only exactly one (Large, then Medium, then Small) allows them to perfectly nest inside each other. The probability is exactly 1/6.",
    plays: "New"
  },
  {
    id: "023-the-underground-club",
    date: "2026-11-24",
    displayDate: "Nov 24",
    title: "The Underground Club",
    context: "A spy is trying to infiltrate a secret syndicate's club. He hides in the shadows and watches the door guard test arriving guests.",
    options: [
      "The guard says 'Twelve'. The guest replies 'Six' and enters.",
      "The guard says 'Six'. The next guest replies 'Three' and enters.",
      "The guard says 'Ten'. The third guest replies 'Three' and enters."
    ],
    question: "The spy confidently walks up. The guard says 'Five'. What exact number must the spy reply to enter safely?",
    answer: "4|four",
    hint: "No hint for this one.",
    successMessage: "Correct! 4. Your brain naturally wants this to be a mathematical sequence, but it's actually a spelling puzzle. You just have to count the letters in the word!",
    solution: "This is a classic lateral thinking trap. Our brains are hardwired to look for mathematical patterns when we see numbers. When we hear 'Twelve gets Six' and 'Six gets Three', we instantly assume the rule is 'divide by two'. But when 'Ten gets Three', the mathematical logic shatters. To solve it, you must shift your perspective laterally from math to language. The rule is simply to count the number of letters in the spoken word. 'Twelve' has 6 letters. 'Six' has 3 letters. 'Ten' has 3 letters. When the guard says 'Five' (F-I-V-E), it has 4 letters. The spy must answer 4.",
    plays: "New"
  },
  {
    id: "024-fried-chips",
    date: "2026-11-25",
    displayDate: "Nov 25",
    title: "Fried Chips",
    context: "A hardware engineer is testing the absolute maximum voltage tolerance of a revolutionary new microchip. The testing machine can deliver exactly 90 distinct voltage surges (Level 1 is the weakest, Level 90 is the strongest).",
    options: [
      "She only has 2 extremely expensive prototype chips to work with.",
      "If a chip survives a surge, it is completely unharmed and can be tested again.",
      "If a surge exceeds its limit, the chip permanently fries."
    ],
    question: "To guarantee finding the exact frying point with the absolute minimum number of tests in the worst-case scenario, which voltage level must she test first?",
    answer: "13",
    hint: "Look at the relation between the first level that you choose and the total trials that you would need if the chip fries at that level",
    successMessage: "Correct! Level 13. If it fries at Level 13, you use your 2nd chip to test Levels 1-12 one by one (13 tests total). If it survives, your next jump up should be slightly smaller (a jump of 12, to Level 25) so your worst-case scenario stays perfectly balanced.",
    solution: "This puzzle punishes the instinct to 'divide by half' (testing Level 45 first). If the first chip fries at 45, you are left with just 1 chip to test levels 1-44 one at a time, taking up to 45 tests! To optimize the worst-case scenario, every time your first chip survives a jump, your next jump must be 1 level shorter to compensate for the test you just 'spent'. You need a sequence of decreasing jumps (X + (X-1) + (X-2)...) that equals at least 90. 13 + 12 + 11 + 10... equals 91. By testing exactly at Level 13 first, and decreasing your jump size by 1 each time it survives (to 25, then 36, then 46...), you guarantee you will never need more than exactly 13 tests to find the limit.",
    plays: "New",
    "top": true
  },
  {
    "id": "025-the-collider",
    "date": "2026-11-26",
    "displayDate": "Nov 26",
    "title": "The Particle Collider",
    "context": "An engineer is building a miniature closed-loop particle accelerator. They lay down perfectly straight vacuum tubes that are exactly 25 meters long.",
    "options": [
      "At the end of each tube, a magnetic joint connects to the next tube.",
      "The inside angle measured between any two connected tubes is exactly 168 degrees.",
      "They continue adding tubes until the track connects perfectly back to the starting point."
    ],
    "question": "What is the total length (in meters) of the vacuum tubes used to complete the accelerator?",
    "answer": "750",
    "hint": "Imagine the beam of particles: every time it passes a joint, how many degrees does it actually deflect away from a straight 180-degree line?",
    "successMessage": "Correct! 750 meters. The beam turns exactly 12 degrees at each joint (180 - 168). To complete a full circle (360 degrees), it must pass through 30 joints. 30 tubes × 25 meters = 750 meters.",
    "solution": "If a particle travels down a tube and reaches a joint, continuing straight would be a 180-degree line. Since the interior angle of the joint is 168 degrees, the actual change in direction (the exterior deflection angle) is 12 degrees (180 - 168). To completely close a loop, the total change in direction must equal exactly 360 degrees. Dividing 360 by 12 tells us the accelerator requires exactly 30 joints (and therefore 30 tubes) to complete the circuit. Since each of the 30 tubes is 25 meters long, the total length is 30 × 25 = 750. The exact length is 750.",
    "plays": "New",
    "top": true
  },
  {
    "id": "026-the-deja-vu-point",
    "date": "2026-11-27",
    "displayDate": "Nov 27",
    "title": "The Déjà Vu Point",
    "context": "You walk from Town A to Town B, which are exactly 20 miles apart, starting at 8:00 AM. The next day, you walk back from Town B to Town A, also starting at exactly 8:00 AM.",
    "options": [
      "The 10 miles closest to Town A are perfectly paved.",
      "The 10 miles closest to Town B are cobbled, causing you to walk at exactly half of your paved-road speed.",
      "Assume your speed on each type of terrain is perfectly constant both days."
    ],
    "question": "Exactly how many miles away from Town A will you be when you pass that point at the exact same time of day on both trips? (Enter a decimal number)",
    "answer": "12.5",
    "hint": "Imagine a clone of yourself starts walking from Town B on the first day at the exact same time you start from Town A. Where exactly would you two meet?",
    "successMessage": "Correct! 12.5 miles. By imagining both trips happening on the same day, they walk towards each other. They both reach the 10-mile halfway point at different times, but they meet exactly 2.5 miles into the cobbled section.",
    "solution": "The most elegant way to solve this without complex algebra is to imagine both trips happening simultaneously. 'You' start at Town A, and your 'clone' starts at Town B. Let's say your fast speed is V, and your slow speed is 0.5V. It takes you time T to reach the 10-mile mark. In that exact same time T, your clone (moving at half speed on the cobbles) has only traveled 5 miles, placing them at the 15-mile mark. Now you are exactly 5 miles apart (between mile 10 and 15), both in the cobbled section, and both moving towards each other at the exact same slow speed (0.5V). You will meet exactly in the middle of that 5-mile gap. Half of 5 is 2.5. Adding this to your 10 miles gives 12.5. You pass the 12.5-mile mark at the exact same time both days.",
    "plays": "New",
    "top": true
  },
  {
    "id": "027-the-curators-equation",
    "date": "2026-11-28",
    "displayDate": "Nov 28",
    "title": "The Curator's Equation",
    "context": "A renowned museum strictly regulates its entrance. Exactly 200 visitors are admitted every hour, maintaining a continuous steady flow. The fire marshal's live counter shows that there are consistently 500 visitors inside the building at any given moment.",
    "options": [
      "70% of visitors follow the audio-guided 'Highlights Tour' and exit the building in exactly 90 minutes.",
      "The remaining 30% are 'Enthusiasts' who ditch the guide to wander the extended galleries.",
      "The museum has no other visitor types."
    ],
    "question": "What is the exact average time (in minutes) that the Enthusiasts spend inside the museum?",
    "answer": "290",
    "hint": "Don't try to simulate the timeline or overlapping groups. First look for the cycle time of the average visitor",
    "successMessage": "Correct! 290 minutes. Using Little's Law, the overall average time a person spends inside is Inventory (500) divided by Rate (200/hr) = 2.5 hours (150 minutes). If 70% stay for 90 minutes, the 30% must stay for 290 minutes to pull the total average up to 150.",
    "solution": "This is a classic queueing theory trap. According to Little's Law, the average number of items in a stable system equals the arrival rate multiplied by the average time spent in the system (L = λW). The inventory (L) is 500 people, and the arrival rate (λ) is 200 people per hour. Therefore, the overall average time (W) a person spends inside is 500 / 200 = 2.5 hours, or 150 minutes. We can now set up a weighted average equation for the two groups: (0.70 × 90 minutes) + (0.30 × X) = 150 minutes. This simplifies to 63 + 0.3X = 150. Subtracting 63 leaves 0.3X = 87. Dividing by 0.3 gives X = 290. The Enthusiasts spend exactly 290 minutes inside.",
    "plays": "New"
  },
  {
    "id": "028-the-island-charter",
    "date": "2026-11-29",
    "displayDate": "Nov 29",
    "title": "The Island Charter",
    "context": "You are organizing a school trip to a remote island. The charter airline bills strictly per full aircraft rather than individual tickets, meaning chartering any plane with empty seats is not permitted.",
    "options": [
      "The fleet provides only two aircraft models: a light aircraft carrying exactly 3 passengers, and an executive turboprop carrying exactly 10 passengers.",
      "You can charter any combination of either model (including zero of one type).",
      "Every aircraft flown must be 100% full; zero empty seats are allowed."
    ],
    "question": "What is the minimum number of students needed to guarantee that every possible group size from that number onwards can be transported with zero empty seats?",
    "answer": "18",
    "hint": "Since the smallest aircraft carries 3 passengers, you only need to find the first sequence of 3 consecutive achievable totals.",
    "successMessage": "Correct! 18 students. 17 is the maximum impossible number (neither 17 nor 17 - 10 = 7 are divisible by 3). Once you reach three consecutive valid totals (18 = 3×6, 19 = 10 + 3×3, 20 = 10×2), every subsequent number can be formed by adding 3-passenger planes.",
    "solution": "This is an application of the Frobenius Coin Problem for two coprime numbers: a = 3 and b = 10. The greatest integer that cannot be expressed as 3x + 10y (where x, y ≥ 0) is given by ab - a - b = (3 × 10) - 3 - 10 = 17. We can confirm 17 is impossible without formulas: using no 10-seater requires 17 to be divisible by 3 (it is not); using one 10-seater leaves 7 seats (not divisible by 3); and using two 10-seaters exceeds 17. However, the three consecutive numbers right after 17 are all achievable: 18 (six 3-seaters), 19 (one 10-seater + three 3-seaters), and 20 (two 10-seaters). Because the smallest aircraft holds 3 seats, any integer N ≥ 18 can be generated simply by taking the corresponding base case (18, 19, or 20) and adding multiples of 3. Thus, 18 is the exact minimum threshold where zero empty seats can always be guaranteed.",
    "plays": "New",
    "top": true
  },
  {
    "id": "029-the-extra-canvas",
    "date": "2026-11-30",
    "displayDate": "Nov 30",
    "title": "The Extra Canvas",
    "image": "029-the-extra-canvas.svg",
    "context": "You are hosting an event in a circular outdoor venue with a diameter of 20 meters. To protect the space from rain, you hang a square canvas so that all four of its corners touch the venue's circular boundary. To increase coverage, you hang a second identical canvas directly over the first, rotated by 45 degrees.",
    "options": [
      "The circular terrain has a diameter of exactly 20 meters (d = 20).",
      "Both square canvases are identical and inscribed within the circle (all corners touch the perimeter).",
      "The second canvas is rotated exactly 45° relative to the first."
    ],
    "question": "How much additional area (in square meters, rounded to the nearest integer) does the second canvas cover that was not already covered by the first?",
    "answer": "34",
    "hint": "The diagonal of each square equals the diameter of the circle (20 m). Notice that rotating the square 45° creates 4 identical protruding triangular tips outside the first square.",
    "successMessage": "Correct! 34 m² (exact: 600 - 400√2 ≈ 34.31 m²). The first canvas covers 200 m² (d²/2). When the second canvas is placed at 45°, it does not form a solid regular octagon, but an 8-pointed star where 4 identical triangular tips extend beyond the base square. Each tip has an area of (10 - 5√2)² ≈ 8.58 m², adding a total of ~34.31 m² of newly covered area.",
    "solution": "1. Area of the first square (A₁):\nSince the square is inscribed in a circle with diameter d = 20 m, its diagonal equals 20 m.\nArea = d² / 2 = 20² / 2 = 200 m².\nThe side length of the square is s = 20 / √2 = 10√2 ≈ 14.142 m.\n\n2. Geometry of the newly covered area:\nWhen the second identical square is rotated by 45°, its four vertices protrude past the four flat edges of the first square. By symmetry, the newly covered area consists of 4 identical protruding right isosceles triangles.\n\nFor any single protruding tip:\n- The distance from the center to the vertex of the tip is the circle radius: R = 10 m.\n- The distance from the center to the edge of the first square is half its side: s / 2 = 5√2 m.\n- The height of this triangular tip is: h = 10 - 5√2 m.\n- Because the corner is a 90° angle, the base of the triangle along the edge of the first square is 2h = 2(10 - 5√2) m.\n\n3. Calculate the area of the 4 tips:\nArea of 1 tip = (base × height) / 2 = h² = (10 - 5√2)² = 150 - 100√2 ≈ 8.5786 m².\nTotal Additional Area = 4 × (150 - 100√2) = 600 - 400√2 ≈ 34.3146 m².\n\nRounded to the nearest integer, the answer is 34.",
    "plays": "New"
  },
  {
    "id": "030-the-barons-estate",
    "date": "2026-12-01",
    "displayDate": "Dec 01",
    "title": "The Baron's Estate",
    "context": "Three siblings inherit a vast estate of exactly 1 square mile of land, which they immediately divide among themselves into three perfectly equal parcels.",
    "options": [
      "Months later, two long-lost legitimate heirs emerge.",
      "Fortunately, the family lawyer discovers a second, identical 1-square-mile estate.",
      "The original siblings refuse to alter or split their existing parcels.",
      "The second estate must be subdivided into a set number of equal-sized smaller plots to be distributed."
    ],
    "question": "What is the minimum number of equal plots the second estate must be divided into so that all 5 heirs end up owning the exact same total amount of land?",
    "answer": "15",
    "hint": "Calculate what fraction of the total land each heir should ultimately own, and compare it to what the first three siblings already have.",
    "successMessage": "Correct! 15 plots. There are 2 square miles in total and 5 heirs, so each heir must end up with 2/5 of a square mile. The first 3 siblings already own 1/3 each. The difference they need is 2/5 - 1/3 = 6/15 - 5/15 = 1/15. The two new heirs each need 2/5 (or 6/15). The second estate must be divided into 15 equal plots: 1 plot for each of the original siblings (3 total), and 6 plots for each of the new heirs (12 total). 3 + 12 = 15.",
    "solution": "1. Find the target ownership:\nTotal land = 2 square miles. Total heirs = 5. \nTarget per heir = 2/5 of a square mile.\n\n2. Calculate the deficit for the original siblings:\nThey currently own 1/3 of a square mile each.\nDeficit = Target - Current = 2/5 - 1/3 = 6/15 - 5/15 = 1/15 of a square mile.\nThis means each of the 3 original siblings needs exactly 1/15 of a square mile from the second estate.\n\n3. Calculate the deficit for the new heirs:\nThey currently own nothing. They each need exactly 2/5 of a square mile from the second estate. \nExpressed in fifteenths, 2/5 = 6/15.\n\n4. Sum it up:\nTo distribute portions in increments of 1/15 and 6/15, the second estate must be divided into 15 equal plots. \nOriginal sibling 1 gets 1 plot.\nOriginal sibling 2 gets 1 plot.\nOriginal sibling 3 gets 1 plot.\nNew heir 1 gets 6 plots.\nNew heir 2 gets 6 plots.\nTotal = 1 + 1 + 1 + 6 + 6 = 15 plots.",
    "plays": "New",
    "top": true
  },
  {
    "id": "031-dropped-drives",
    "date": "2026-12-02",
    "displayDate": "Dec 02",
    "title": "Dropped Drives",
    "context": "A frantic junior sysadmin trips and drops 5 identical-looking master backup drives (Drives A, B, C, D, and E). Without knowing which is which, they blindly insert all 5 drives back into the 5 specific server bays.",
    "options": [
      "Each of the 5 drives belongs to exactly one specific bay.",
      "The sysadmin inserts one drive per bay, completely at random.",
      "The server cluster will successfully boot if AT LEAST ONE drive is in its correct, original bay."
    ],
    "question": "What is the exact probability (expressed as a simplified fraction, like 'a/b') that the server boots?",
    "answer": "19/30",
    "hint": "Each drive insertion is not independent. For example, if you put drive A in Bay B, drive B will automatically miss its Bay",
    "successMessage": "Correct! 19/30 (approx. 63.3%). Many mistakenly calculate 1 - (4/5)^5, assuming the slots are independent. But because a drive placed in the wrong bay forces another drive out of its spot, we must use the inclusion-exclusion principle for Derangements. The probability of 0 matches for 5 items is: 1/2! - 1/3! + 1/4! - 1/5! = 60/120 - 20/120 + 5/120 - 1/120 = 44/120, which simplifies to 11/30. Thus, the chance of at least one match is 1 - 11/30 = 19/30.",
    "plays": "New",
    "top": true
  },
  {
    "id": "032-the-weight-of-the-slow-miles",
    "date": "2026-12-03",
    "displayDate": "Dec 03",
    "title": "The Weight of the Slow Miles",
    "context": "Jack and Bob compete in a 24-mile endurance race. Both runners plan to run at exactly 12 mph when feeling fresh, and exactly 6 mph when fatigued.",
    "options": [
      "Jack splits his race by DISTANCE: He runs the first 12 miles at 12 mph, and the final 12 miles at 6 mph.",
      "Bob splits his race by TIME: He manages his pace to run exactly half of his total race time at 12 mph, and the other half at 6 mph."
    ],
    "question": "Exactly how many minutes before Jack does Bob cross the finish line?",
    "answer": "20",
    "hint": "No hint for this one",
    "successMessage": "Correct! 20 minutes. Because Jack split by distance, his slower speed acted like an anchor, giving it twice the 'weight' on his overall time. He averaged 8 mph, while Bob averaged exactly 9 mph.",
    "solution": "The illusion is assuming both runners average 9 mph (the midpoint of 12 and 6). Alice splits by distance: Her first 12 miles take 1 hour (12 mi / 12 mph). Her final 12 miles take 2 hours (12 mi / 6 mph). He finishes in exactly 3 hours (180 minutes). Because he spent 2 hours going slow and only 1 hour going fast, the slow speed heavily drags down his overall average to 8 mph. \n\nBob splits by time. Let 'T' be his total hours. He runs at 12 mph for T/2, and 6 mph for T/2. His distance equation is: (12 × T/2) + (6 × T/2) = 24 miles. This simplifies to 6T + 3T = 24, so 9T = 24. Bob finishes in 24/9 hours, which is exactly 2 hours and 40 minutes (160 minutes). 180 - 160 = exactly 20 minutes of difference.",
    "plays": "New"
  },
  {
    "id": "033-the-classic-revolver",
    "date": "2026-12-04",
    "displayDate": "Dec 04",
    "title": "The Classic Revolver",
    "context": "A villain loads exactly two bullets into adjacent chambers of a classic 6-chamber revolver. They spin the cylinder, point it at the wall, and pull the trigger. *Click.* The chamber was empty. They hand the gun to you and force you to make a choice.",
    "options": [
      "You can either spin the cylinder again before firing, or just pull the trigger immediately.",
      "You must choose the option that minimizes your chance of getting shot."
    ],
    "question": "Assuming you make the mathematically optimal choice, what is the exact lowest possible probability (expressed as a simplified fraction, like 'a/b') of the gun firing on your turn?",
    "answer": "1/4",
    "hint": "Calculate both scenarios. Spinning resets the cylinder completely. For pulling the trigger, use the fact that the first shot was a 'click' to narrow down your current position in the sequence of chambers.",
    "successMessage": "Correct! 1/4. If you spin again, your chance of getting shot resets to 2 bullets out of 6 chambers (1/3 or 33.3%). But if you pull the trigger immediately, you know you are currently in one of the 4 empty chambers. Since the bullets are adjacent (B-B-E-E-E-E), only ONE of those four 'E' chambers is immediately followed by a 'B'. So the mathematically optimal choice is to just pull, leaving you with a 1/4 (25%) probability.",
    "solution": "Let's calculate the exact probability for both options to find the lowest one.\n\nOption 1: Spin. \nYou reset the cylinder completely. There are 2 bullets and 6 chambers, so the probability of the gun firing is 2/6, which simplifies to 1/3 (33.3%).\n\nOption 2: Pull.\nLet's map out the 6 chambers. Since the 2 bullets are adjacent, the sequence around the cylinder is: Bullet, Bullet, Empty, Empty, Empty, Empty (B-B-E-E-E-E).\nThe villain's initial 'Click' gives us crucial information: the gun is currently resting on one of the 4 'Empty' chambers. Let's look at what chamber comes next for each of those 4 possibilities:\n- After the 1st Empty, the next chamber is Empty.\n- After the 2nd Empty, the next chamber is Empty.\n- After the 3rd Empty, the next chamber is Empty.\n- After the 4th Empty, the next chamber is a Bullet.\n\nOut of the 4 possible Empties we could currently be on, only 1 is immediately followed by a bullet. So pulling the trigger without spinning carries a 1/4 (25%) probability of firing.\n\nSince 1/4 is lower than 1/3, the optimal choice is to not spin. The lowest possible probability is 1/4.",
    "plays": "New"
  },
  {
    "id": "034-the-hacker's-passcode",
    "date": "2026-12-05",
    "displayDate": "Dec 05",
    "title": "The Hacker's Passcode",
    "context": "A security door is locked with a 4-digit binary passcode (the code consists only of 0s and 1s). The keypad only has two buttons: [0] and [1].",
    "options": [
      "The system has no 'Enter' button. It continuously evaluates the last 4 buttons you pressed.",
      "For example, typing '01011' makes the system check '0101' and then immediately check '1011'."
    ],
    "question": "What is the absolute minimum number of button presses required to mathematically guarantee you test every possible 4-digit combination?",
    "answer": "19",
    "hint": "Think about overlapping the numbers. For example, if you type '00001', the system reads '0000' and then '0001' with just one extra keystroke.",
    "successMessage": "Correct! 19 presses. Many people guess 64 (16 combinations × 4 digits). But because the combinations overlap, you can use what mathematicians call a 'De Bruijn sequence'. By typing a specific, calculated continuous string like '0000111101100101000', every single one of the 16 possible combinations appears exactly once as a sliding 4-digit window. You need 4 initial presses for the first combo, plus 15 single presses for the remaining 15 combos. 4 + 15 = 19.",
    "solution": "Since the passcode is 4 digits long and only uses 0s and 1s, there are exactly 2⁴ = 16 possible combinations.\n\nIf we typed them all individually, it would take 16 × 4 = 64 button presses. However, the system evaluates the input continuously.\n\nThis means after you press the first 4 buttons (to test combination #1), every subsequent single button press shifts the window and creates a brand new 4-digit combination.\n\nTo test all 16 combinations efficiently, you need a carefully calculated sequence where no overlapping combinations are repeated:\n- 4 button presses to create the very first combination.\n- 15 additional button presses, each one generating a new, unique combination.\n\nThis optimal overlapping method creates a 'De Bruijn sequence'. The absolute minimum total number of keystrokes needed is 4 + 15 = 19 presses.",
    "plays": "New",
    "top": true
  },
  {
    "id": "035-the-gold-cut",
    "date": "2026-12-06",
    "displayDate": "Dec 06",
    "title": "The Gold Cut",
    "context": "A sports committee needs to cut costs for their upcoming tournament. Their original gold medals were shaped as perfect regular hexagons, weighing exactly 120 grams of solid gold each.",
    "options": [
      "To save money without changing the length of the ribbon, they change the shape of the medals to an equilateral triangle with the exact same total perimeter.",
      "Assume the thickness and density of the new medals remain perfectly identical to the original ones."
    ],
    "question": "How many grams of gold will the new triangular medal contain?",
    "answer": "80",
    "hint": "Imagine both medals are built from identical small equilateral triangles. A hexagon uses exactly 6. How many does the new triangle use?",
    "successMessage": "Correct! 80 grams. A regular hexagon is made up of exactly 6 small equilateral triangles. If the hexagon's perimeter is 6 units, the new large triangle must also have a perimeter of 6, meaning each of its sides is 2 units long. An equilateral triangle with a side length of 2 is made of exactly 4 small triangles. The hexagon has 6 parts, the triangle has 4 parts. The new medal is exactly 4/6 (or 2/3) the weight of the original. 2/3 of 120g = 80g.",
    "solution": "Let's solve this visually to avoid messy geometry formulas. \n\nImagine the original regular hexagon is constructed by joining 6 identical small equilateral triangles at the center. Let's say the outer edge of each small triangle is 1 unit long. That gives the hexagon a total perimeter of 6 units. \n\nThe committee wants a new equilateral triangle medal with the exact same perimeter (6 units). Since a triangle has 3 equal sides, each side of the new medal must be exactly 2 units long. \n\nIf you draw an equilateral triangle with side lengths of 2, it perfectly subdivides into exactly 4 small unit triangles. \n\nThe original hexagon consisted of 6 small triangles. The new triangle consists of only 4 small triangles. Therefore, the new medal uses exactly 4/6 (which simplifies to 2/3) of the original volume of gold. \n\nSince the original medal weighed 120 grams, the new one weighs exactly 2/3 of 120, which is 80 grams.",
    "plays": "New",
    "top": true
  },
  {
    "id": "036-the-inspection-drone",
    "date": "2026-12-07",
    "displayDate": "Dec 07",
    "title": "The Inspection Drone",
    "context": "An autonomous drone inspects a long, straight underground fiber-optic tunnel. On Monday, it departs Server A at exactly midnight and arrives at Server B at 1:00 AM, pausing and accelerating erratically to scan for damage. On Tuesday, it makes the return trip, departing Server B at midnight and arriving at Server A at 1:00 AM, again moving at completely random speeds.",
    "options": [
      "Assume the drone never traveled at a constant rate on either day.",
      "The physical path taken on both days is perfectly identical."
    ],
    "question": "What is the exact probability (in percentage) that there is a specific physical point in the tunnel where the drone was located at the exact same time on both days?",
    "answer": "100",
    "hint": "Imagine Monday's drone and Tuesday's drone are placed in the tunnel on the exact same day at midnight.",
    "successMessage": "Correct! 100%. Even with completely random speeds, if one version of the drone is going A-to-B and the other B-to-A in the same time window, they are mathematically guaranteed to cross paths at some exact time and location.",
    "solution": "Let's visualize this without complex math. Imagine playing a video recording of Monday's inspection and Tuesday's return trip on two different screens. Now, merge them into one screen, so both versions of the drone are moving through the same tunnel simultaneously between midnight and 1:00 AM.\n\nOne version is starting at Server A and heading to B. The other is starting at Server B and heading to A. Because they are on the exact same path and moving during the exact same 60-minute window, they MUST physically cross paths at some specific moment before 1:00 AM.\n\nIt doesn't matter if they stop, speed up, or slow down; to get to their respective opposite ends, their physical positions must intersect. At that exact moment of crossing, they are at the exact same location at the exact same time. Therefore, the probability is guaranteed: 100%.",
    "plays": "New",
    "top": true
  },
  {
    "id": "037-the-bottling-plant",
    "date": "2026-12-08",
    "displayDate": "Dec 08",
    "title": "The Bottling Plant",
    "context": "A massive automated beverage plant turns on its main conveyor belt at exactly 6:00 AM. Empty glass bottles immediately begin entering an enclosed washing and filling tunnel at a perfectly steady rate of 400 bottles per minute.",
    "options": [
      "Every single bottle takes exactly 15 minutes to travel through the entire tunnel before exiting the other side.",
      "The system runs continuously without errors, stops, or bottlenecks."
    ],
    "question": "At exactly 1:42 PM, how many bottles are actively inside the enclosed tunnel?",
    "answer": "6000",
    "hint": "You could calculate the total minutes since 6:00 AM, multiply by 400, and subtract the bottles that have already exited... or you could just calculate what is the average inventory that the tunnel will hold at any given time using average cycle time and rate of new bottles entering",
    "successMessage": "Correct! 6000 bottles. Many try to solve this by calculating the total time elapsed since 6:00 AM to find the total inputs, then subtracting the outputs. But the exact time of day (1:42 PM) is a red herring! At constant rates, the Average Inventory = Rate of Bottles Entering × Cycle Time, once the tunnel is full after the first 15 minutes, it reaches a steady state. At any given moment, the tunnel holds exactly 15 minutes worth of bottles. 400 bottles/min × 15 minutes = 6,000 bottles.",
    "solution": "This puzzle is a trap designed to make you do unnecessary accounting.\n\nMethod 1 (The long way): You could calculate the exact number of minutes between 6:00 AM and 1:42 PM (462 minutes), multiply by 400 to find out how many bottles entered (184,800), and then subtract the bottles that have exited, which started exiting 15 minutes later (447 minutes × 400 = 178,800). 184,800 - 178,800 = 6,000.\n\nMethod 2 (Little's Law): Look at the steady state. Because bottles enter at a constant 400 per minute, and each bottle stays inside for exactly 15 minutes, the tunnel is always holding a 'moving window' of exactly 15 minutes worth of bottles.\n\nThe time '1:42 PM' is completely irrelevant as long as it's past the initial 15-minute startup. The system simply holds: Inventory = Flow Rate × Time.\n\n400 bottles/minute × 15 minutes = 6,000 bottles.",
    "plays": "New"
  },
  {
    "id": "038-robo-hood",
    "date": "2026-12-09",
    "displayDate": "Dec 09",
    "title": "Robo Hood",
    "context": "You are in a single-arrow shooting match against a robotic archer. The robot is programmed to be perfectly random: any specific physical point on the entire target has the exact same probability of being hit. The target is divided into 4 concentric scoring zones of exactly equal width. From the center outwards, the zones are worth 50, 25, 10, and 1 point.",
    "options": [
      "Assume every arrow lands somewhere on the board (no misses).",
      "You shoot first and your arrow lands perfectly in the 25-point zone."
    ],
    "question": "What is the exact probability (in percentage) that you beat the robot on its next shot?",
    "answer": "75",
    "hint": "To beat you, the robot must hit the 50 or tie you at 25. To lose, it must hit the 10 or 1. Don't assume the probability is divided equally just because the zone widths are equal.",
    "successMessage": "Correct! 75%. It's easy to assume the 4 rings represent 25% of the area each. But the area of a circle grows with the square of its radius. If the rings have radii of 1, 2, 3, and 4, their total areas are 1, 4, 9, and 16. The actual area of each individual ring follows the odd numbers: 1, 3, 5, and 7. For the robot to lose, it must hit the 10-point ring (5 units of area) or the 1-point ring (7 units of area). 5 + 7 = 12. 12 out of 16 total units is exactly 75%.",
    "solution": "To win, the robot must score less than your 25 points. This means its completely random arrow must land in either the 10-point zone or the 1-point zone.\n\nLet's assume the width of each scoring zone is 1 unit. This makes the radius of the center circle 1, the radius to the edge of the second zone 2, the third is 3, and the outer zone is 4.\n\nThe area of a circle is proportional to the square of its radius ($r^2$). So the total accumulated areas from the center outwards are 1, 4, 9, and 16.\n\nTo find the exact area of each specific scoring zone, we subtract the inner circles from the outer ones:\n- Center (50 pts): 1\n- Zone 2 (25 pts): 4 - 1 = 3\n- Zone 3 (10 pts): 9 - 4 = 5\n- Zone 4 (1 pt): 16 - 9 = 7\n\nThe total area of the board is 16 units. The zones where the robot scores less than 25 (Zone 3 and Zone 4) have a combined area of 5 + 7 = 12 units.\n\nSince the robot hits any physical point with equal probability, the chance of its arrow landing in these losing zones is simply their area divided by the total area: 12 out of 16, which simplifies to 3/4, or exactly 75%.",
    "plays": "New",
    "top": true
  },
  {
    "id": "039-the-lemmings-bridge",
    "date": "2026-12-10",
    "displayDate": "Dec 10",
    "title": "The Lemmings Bridge",
    "context": "You are playing a custom, slightly glitched level of the classic retro game 'Lemmings'. On this screen, 50 identical Lemmings are walking along a perfectly straight digital bridge that is exactly 100 pixels wide. They all move at a constant speed of 1 pixel per second.",
    "options": [
      "Due to a glitch in this specific level, whenever two Lemmings bump into each other, they both instantly reverse direction.",
      "A Lemming is saved (and disappears from the screen) the moment it steps off either the extreme left or right edge of the bridge."
    ],
    "question": "Without knowing their starting pixels or the directions they are facing, what is the absolute maximum possible time (in seconds) it could take for the bridge to be completely empty?",
    "answer": "100",
    "hint": "Think like a lazy game developer. If all the Lemming sprites look identical, what is the visual difference on the screen between two Lemmings bouncing off each other, versus the two simply walking right through each other?",
    "successMessage": "Correct! 100 seconds. The bouncing logic makes it seem like you need a complex simulation to find the worst-case scenario. But because all Lemmings are identical and move at the exact same speed, a collision where they 'bounce' is visually and mathematically indistinguishable from them simply phasing right through one another! If you pretend the collision glitch doesn't exist and they just walk through each other, the worst-case scenario is one Lemming starting at pixel 0 and walking the entire 100 pixels to the other side: exactly 100 seconds.",
    "solution": "This problem feels impossible because you are missing the starting positions, initial directions, and the total number of collisions. You might think you need to map out every single bump to find the worst-case scenario.\n\nThe trick is a shift in perspective. When two identical Lemmings moving at 1 pixel/sec meet and reverse, they swap paths. But on the screen, this looks exactly the same as if the two pixel-art sprites just passed directly *through* each other, each continuing on its original trajectory.\n\nSince the Lemmings are identical, the player doesn't care *which* specific Lemming falls into the exit, just that the bridge empties. If we pretend they all pass through each other without reversing, the collisions don't matter at all.\n\nWithout collisions altering their overall progress across the screen, the absolute worst-case scenario is simply one Lemming starting at the extreme left edge of the bridge and having to travel the entire 100-pixel width to exit on the right.\n\nAt 1 pixel per second, traveling 100 pixels takes exactly 100 seconds. The screen is guaranteed to be empty by then.",
    "plays": "New",
    "top": true
  },
  {
    "id": "040-memory-leak",
    "date": "2026-12-11",
    "displayDate": "Dec 11",
    "title": "Memory Leak",
    "context": "A secure server stores sequentially numbered data packets starting from ID 1. For hardware efficiency, the packets are written into physical memory sectors in pairs: Sector 1 holds packets 1 and 2, Sector 2 holds packets 3 and 4, and so on. A cyberattack permanently wipes exactly one memory sector. The server's emergency diagnostic tool runs a checksum by adding together the ID numbers of all the surviving packets. The total checksum is exactly 191.",
    "options": [
      "Every memory sector contains exactly two consecutive packets, always starting with an odd number.",
      "There were no gaps in the original sequence of packets."
    ],
    "question": "What is the lowest packet ID number inside the wiped sector?",
    "answer": "9",
    "hint": "First, figure out how many packets the server originally held. What total sum of n numbers (n being an even number) is just slightly higher than 191?",
    "successMessage": "Correct! Packet 9. If the server originally had 19 packets, the total sum of their IDs would be 190 (impossible, as the remaining sum is 191). If it had 20 packets, the sum from 1 to 20 is exactly 210. Since the remaining packets add up to 191, the wiped sector must contain IDs that add up to 19 (210 - 191 = 19). The only two consecutive packets that add up to 19 are 9 and 10. Since 9 is odd and 10 is even, they perfectly form a single memory sector.",
    "solution": "We need to find out how many packets were originally on the server before the sector was wiped. \n\nWe know the sum of consecutive numbers from 1 to N uses the formula: N × (N + 1) / 2.\n\nLet's test small numbers around our remaining checksum of 191:\n- If there were 19 packets: 19 × 20 / 2 = 190. (This is impossible, because our remaining packets already sum to 191).\n- If there were 20 packets: 20 × 21 / 2 = 210.\n\nIf the original sum was 210, and the sum of the remaining packets is 191, the missing packet IDs must add up to exactly 19 (210 - 191 = 19).\n\nSince a single memory sector consists of two consecutive packet numbers, we need two numbers in a row that sum to 19. \n\n9 + 10 = 19.\n\nFinally, we verify if packets 9 and 10 can share a sector. The rules state sectors hold an odd number followed by an even number (1-2, 3-4, etc.). Since 9 is odd and 10 is even, they perfectly represent a single wiped sector. \n\nThe lowest packet ID in that sector is 9.",
    "plays": "New",
    "top": true
  },
  {
    "id": "041-the-donald",
    "date": "2026-12-12",
    "displayDate": "Dec 12",
    "title": "The Donald",
    "context": "A global summit is being held with 50 world leaders. The room has 50 chairs, each with a specific assigned name tag. Donald Trump walks in first, completely ignores the name tags, and sits in a random chair.",
    "options": [
      "As the other leaders enter one by one, they sit in their assigned chair if it is empty.",
      "If their assigned chair is already taken, they avoid causing an international incident by simply sitting in a random empty chair."
    ],
    "question": "You are the 50th and final leader to walk into the room. What is the exact probability (in percentage) that your assigned chair is still empty?",
    "answer": "50",
    "hint": "Don't try to calculate all the chaotic random choices of 50 people. Think about the very end. When you walk in, there is exactly one empty chair left. Which two chairs are the only ones it could possibly be?",
    "successMessage": "Correct! 50%. The total number of people doesn't matter! By the time you, the final leader, walk in, every single chair from the 2nd to the 49th leader has definitively been taken (either by its rightful owner or by someone randomly displaced). The only two chairs that could possibly be left empty at the very end are your chair, or Trump's original assigned chair. Since every random choice during the chaos treated those two specific chairs equally, there is exactly a 50/50 chance of either one being the last one available.",
    "solution": "This seems like it requires calculating a massive tree of probabilities, but it can be solved with pure logic.\n\nLet's look at what happens when anyone is forced to choose a random empty chair:\n- If they randomly sit in Trump's original assigned chair, the chaos ends immediately. Everyone else who walks in after them will find their own chair empty, including you.\n- If they randomly sit in YOUR assigned chair, you are guaranteed to lose your seat.\n- If they sit in anyone else's chair, the chain reaction simply continues to the next leader.\n\nBecause the chain reaction only ever stops when either Trump's chair or your chair is chosen, and both of those chairs are always in the same pool of empty chairs being picked from at random, they have the exact same probability of being chosen to end the chain.\n\nTherefore, when you finally walk in, the single remaining empty chair is equally likely to be Trump's original chair or your chair. The probability is exactly 50%.",
    "plays": "New",
    "top": true
  },
  {
    "id": "042-storage-bid",
    "date": "2026-12-13",
    "displayDate": "Dec 13",
    "title": "Storage Bid",
    "context": "A storage facility owner presents you with 4 identical, abandoned storage units. Inside one random unit is a rare coin collection appraised at exactly $10,000; the other three units are completely empty. You can pay a fixed fee to cut the lock and open a unit. If it is empty, you pay the exact same fee again to open a second unit, repeating the process one by one until you find the collection.",
    "options": [
      "Once you find the $10,000 coin collection, you immediately stop opening units and keep it.",
      "A 'fair game' means that over the long run, neither you nor the owner makes a net profit."
    ],
    "question": "To make this a mathematically fair game, how many dollars should the owner charge you for each individual storage unit you open?",
    "answer": "4000",
    "hint": "Almost everyone immediately says $2,500, because 10,000 divided by 4 is 2,500. That would only be true if you were forced to open all 4 units every single time.",
    "successMessage": "Correct! $4,000 per unit. The instinct is to say $2,500 ($10,000 / 4), which assumes you pay for all 4 units every time. However, you stop paying the moment you find the coins! There is an equal 25% chance the collection is found on your 1st, 2nd, 3rd, or 4th try. On average, you will only open 2.5 units ((1 + 2 + 3 + 4) / 4 = 2.5). For your average cost to equal the guaranteed $10,000 payout, each unit must cost $4,000 ($10,000 / 2.5 = $4,000).",
    "solution": "The classic trap is dividing the $10,000 prize by the 4 units to get $2,500. That logic only works if you are forced to pay for all 4 units upfront every time.\n\nBecause you open them one by one and *stop* as soon as you find the coin collection, your total cost changes depending on when you get lucky. Since the collection is hidden randomly, there are 4 equally likely scenarios (25% chance each):\n\n- Found on the 1st try: You pay for 1 unit.\n- Found on the 2nd try: You pay for 2 units.\n- Found on the 3rd try: You pay for 3 units.\n- Found on the 4th try: You pay for 4 units.\n\nTo find the average number of units you will open, we take the average of those four outcomes:\n(1 + 2 + 3 + 4) ÷ 4 = 2.5 units.\n\nSince you are guaranteed to eventually walk away with the $10,000 collection, a fair deal requires your average total cost to equal $10,000.\n\n2.5 units × Price = $10,000\nPrice = $10,000 ÷ 2.5 = $4,000 per unit.",
    "plays": "New"
  },
  {
    "id": "043-token-burn",
    "date": "2026-12-14",
    "displayDate": "Dec 14",
    "title": "Token Burn",
    "context": "Your startup runs on an AI API. At the start of each month, you can pre-purchase any exact number of token packs at a discounted rate of $2 per pack. Unused packs expire at the end of the month with no refund. If your app runs out of pre-paid packs, the API automatically bills you an on-demand overage rate of $10 per pack. Based on historical traffic, your monthly usage is completely uniform—equally likely to be any amount between 100 and 200 packs.",
    "options": [
      "You must lock in your pre-paid monthly quota before the month begins.",
      "Your goal is to minimize your average monthly AI bill over the long run."
    ],
    "question": "To minimize your expected monthly cost, exactly how many token packs should you pre-purchase each month?",
    "answer": "180",
    "hint": "Don't just pre-buy the average usage (150). Think about pre-buying one extra pack: if you end up needing it, you save $8 ($10 overage minus $2 pre-paid). If you don't need it, you waste $2. What is the minimum probability of needing that extra pack to make it worth buying?",
    "successMessage": "Correct! 180 packs. Most people instinctively pre-buy the average (150), but the cost of under-buying is much higher than over-buying. Every extra pack you pre-buy saves you $8 if you use it (avoiding the $10 overage fee) and only wastes $2 if it expires. That means pre-buying one more pack is a smart bet as long as there is at least a 20% chance you'll use it (20% × $8 saved = $1.60 vs. 80% × $2 wasted = $1.60). Since usage is uniform between 100 and 200, you should pre-buy up to the point where there is still a 20% chance of exceeding it—which is 180.",
    "solution": "The classic trap is pre-buying the average monthly usage of 150 packs. That only works if wasting a pack and paying an overage fee cost the exact same amount. Here, the penalty for running out is much steeper.\n\nInstead of using formulas, ask yourself a simple marginal question: 'Should I pre-buy one more pack?'\n- If I end up needing it, I save $8 ($10 on-demand rate - $2 pre-paid rate).\n- If it goes unused and expires, I waste $2.\n\nBecause your potential savings ($8) are 4 times bigger than your potential waste ($2), you should keep adding packs to your quota as long as the probability of using that next pack is at least 20%:\n- Break-even point: (20% × $8 saved) - (80% × $2 wasted) = $1.60 - $1.60 = $0.\n\nSince monthly usage is uniformly distributed between 100 and 200 packs, the probability of needing at least 180 packs is exactly 20% (the top 20 numbers out of the 100-pack range).\n\nIf you pre-buy 181, the chance of using that 181st pack drops below 20%, making it a losing bet. Therefore, the exact cost-minimizing quota is 180 packs.",
    "plays": "New"
  }
];