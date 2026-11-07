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
    plays: "New"
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
    hint: "The first person shakes hands with 99 people. The second person has already shaken the first person's hand, so they shake hands with 98 new people. Is there a formula for this sum?",
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
    hint: "Instead of counting the symptoms they have, count the symptoms they lack. If you distribute the 'missing' symptoms to as many different people as possible, how many people are left untouched by the absences?",
    successMessage: "Correct! 10 patients. 30 lack a cough, 25 lack a fever, 20 lack fatigue, and 15 lack smell. The maximum number of people missing at least one symptom is 90. The remaining 10 must have all four.",
    solution: "The easiest way to find the minimum overlap is to look at who is *missing* symptoms rather than who has them. Out of 100 patients, 30 lack a cough (100 - 70), 25 lack a fever (100 - 75), 20 lack fatigue (100 - 80), and 15 lack smell (100 - 85). To minimize the number of people with all four symptoms, we must assume these missing symptoms are distributed among as many different patients as possible. If we add up all the 'missing' symptoms (30 + 25 + 20 + 15), we get 90. In the most extreme case, 90 completely different people are each missing exactly one symptom. This leaves exactly 10 patients (100 - 90) who missed out on the 'missing' symptoms. Therefore, those 10 people must have all four symptoms. The answer is 10.",
    plays: "48K+"
  },
  {
    id: "011-diagonal-packing", 
    date: "2026-11-12", 
    displayDate: "Nov 12",
    title: "Diagonal Packing",
    context: "A square bounds three identical solid circles of radius 10. They are packed tightly along the square's main diagonal. The first circle touches the bottom and right edges of the square. The second circle touches the first and third. The third circle touches the top and left edges.",
    imageUrl: "/packing.svg",
    options: [
      "The circles are completely contained within the square."
    ],
    question: "What is the area of the empty space inside the square? (Round your answer to the nearest whole number)",
    answer: "1389",
    hint: "Trust in Pythagoras all the way.",
    successMessage: "Correct! The square's side length is roughly 48.28, making its area ~2331. Subtracting the area of the 3 circles (~942) leaves exactly 1389.",
    solution: "Let's find the side length of the square. The three circles form a line of 40 units between the centers of the outer two circles (radius 10 + diameter 20 + radius 10). The distance from the center of each outer circle to the true corner of the square is the diagonal of a 10x10 square, which is 10√2. Thus, the total length of the large square's diagonal is 40 + 20√2. We can find the side of the square by dividing the diagonal by √2, which gives a side length of 20 + 20√2 (approx 48.28). The total area of the square is (20 + 20√2)², which equals 1200 + 800√2 (approx 2331.37). The area of the three circles is 3 × π × 10² = 300π (approx 942.48). Subtracting the circles from the square leaves an empty space area of approximately 1389.",
    plays: "29K+"
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
    options: [
      "Assume flat terrain and instant acceleration."
    ],
    question: "At what exact speed (in km/h, rounded to one decimal place) must the police car travel to hit the exact interception point at the same time as the thief?",
    answer: "70.7",
    hint: "Break the thief's speed into X and Y coordinates. How much of that 100 km/h is moving West, and how much is moving North? The police only need to match his Northward speed since they start exactly on his path.",
    successMessage: "Correct! 70.7 km/h. The thief's movement forms a 45-45-90 triangle. His Northward speed is 100 × sin(45°), which equals exactly 50√2, or ~70.7 km/h.",
    solution: "The key to this problem is breaking down the thief's diagonal speed into its North and West components using a right triangle. Since he travels Northwest (exactly 135 degrees, or 45 degrees relative to West/North), his path forms a 45-45-90 triangle. His total speed is the hypotenuse (100 km/h). To find his Northward speed, we calculate 100 × sin(45°), which equals exactly 50√2, or approximately 70.71 km/h. Because the police car starts directly South of his path and only moves North, it doesn't need to chase him Westward; it only needs to match his Northward speed to intercept him on the Y-axis exactly as he crosses it. Therefore, the police car must travel at exactly 70.7 km/h.",
    plays: "41K+"
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
    hint: "Don't divide them evenly. What if you make one bag an absolute guarantee to win, and put the rest in the other bag?",
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
    plays: "New"
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
    plays: "New"
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
    plays: "New"
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
    plays: "New"
  },
  {
    id: "021-the-self-aware-code",
    date: "2026-11-22",
    displayDate: "Nov 22",
    title: "The Self-Aware Code",
    context: "A hacker is trying to bypass a security vault that requires a 5-digit passcode. A sticky note on the vault simply says: 'The code describes itself.'",
    options: [
      "The first digit indicates exactly how many 0s are in the passcode.",
      "The second indicates how many 1s, the third how many 2s, the fourth how many 3s, and the fifth how many 4s."
    ],
    question: "What is the 5-digit passcode?",
    answer: "21200",
    hint: "Since the 5 digits are counting the total number of digits in the code, the sum of all the digits must exactly equal 5",
    successMessage: "Correct! 21200. This is known as an 'autobiographical number'. It has exactly two 0s, one 1, two 2s, zero 3s, and zero 4s. Everything balances out perfectly!",
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
    answer: "4",
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
    plays: "New"
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
    "plays": "New"
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
    "plays": "New"
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
  }
];