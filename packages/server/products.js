const products = [
  {
    id: 1,
    name: "Basic",
    price: "42.00",
    sku: 'ABC123',
    shortDesc: 'Introducing our sleek and stylish Black and White Wall Clock - the perfect addition to any home or office! This classic timepiece is designed to be both functional and aesthetically pleasing, with a minimalist black and white design that complements any decor.',
    description: `
The clock features a crisp white clock face with bold black numbers in a modern font, making it easy to read from across the room. The hour and minute hands are thin and elegant, with a glossy black finish that adds a touch of sophistication to the overall design. The seconds hand is also present and is designed to sweep smoothly around the clock face, ensuring accurate timekeeping.
<br/><br/>
Crafted with high-quality materials, this wall clock is built to last and is sure to become a reliable timekeeper for years to come. It runs on a single AA battery, which is easy to replace when needed, and the clock face is protected by a clear glass cover to prevent dust and debris from interfering with the mechanism.
<br/><br/>
This black and white wall clock is perfect for anyone who appreciates clean, simple design and values accurate timekeeping. It is ideal for use in a variety of settings, from modern apartments to traditional homes, and is versatile enough to fit seamlessly into any room.
<br/><br/>
So if you're looking for a basic yet elegant wall clock that gets the job done, look no further than our Black and White Wall Clock with Hour, Minute, and Second Hands. It's a timeless classic that's sure to stand the test of time!    
`,
    image:
      "http://localhost:3000/images/products/basic.png"
  },
  {
    id: 2,
    name: "Bike",
    price: "51.00",
    sku: 'XYZ456',
    shortDesc: 'Introducing the perfect clock for cycling enthusiasts - the Bike Wheel Clock! This unique timepiece is designed to capture the essence of cycling and bring it into your home or office.',
    description: `
The clock features a real bicycle wheel, complete with spokes and rim, which serves as the frame for the clock face. The center of the wheel is home to a sleek, black clock face with large, easy-to-read numbers in a modern font.
<br/><br/>
The hour and minute hands of the clock are shaped like bike chains, adding to the clock's bicycle-inspired design. The second hand is a small, red bicycle wheel that rotates smoothly around the clock face.
<br/><br/>
The Bike Wheel Clock is not only a stylish addition to any room, but it also serves as a reminder of the joy and freedom of cycling. Whether you're a seasoned cyclist or just love the sport, this clock is the perfect way to incorporate your passion into your daily routine.
<br/><br/>
This clock is also a great gift for any cycling enthusiast or a unique addition to a bike shop or cycling-themed business. So why settle for a boring, ordinary clock when you can have a Bike Wheel Clock that showcases your love for cycling in a functional and stylish way?    
`,
    image:
      "http://localhost:3000/images/products/bike.png"
  },
  {
    id: 3,
    name: "Brass",
    price: "47.00",
    sku: 'DEF789',
    shortDesc: 'Introducing the Fully Brass Wall Clock - a stunning timepiece that will make a bold statement in any room. This magnificent clock is crafted entirely from brass, giving it a warm and elegant look that will complement any decor',
    description: `
The clock features a large, round face with a classic white background and bold, easy-to-read black Roman numerals. The hour and minute hands are shaped like delicate arrows, while the second hand is a sleek and slender rod that sweeps smoothly around the clock face.
<br/><br />
At 24 inches in diameter, this wall clock is large enough to be seen from across the room, making it perfect for use in living rooms, dining rooms, or any other space where you want to make a dramatic statement. It is designed to be easy to install, with a built-in hanger on the back that makes it simple to mount on any wall.
<br/><br />
Crafted with the highest standards of quality and attention to detail, this fully brass wall clock is built to last and will provide you with accurate timekeeping for years to come. Whether you're a fan of traditional decor or modern design, this clock is sure to be a centerpiece of any room it's in.
<br/><br />
If you're looking for a truly impressive wall clock that combines functionality with style, look no further than the Fully Brass Wall Clock. It's a timeless classic that will enhance the look of any space and provide you with accurate timekeeping for years to come.
`,
    image:
      "http://localhost:3000/images/products/brass.png"
  },
  {
    id: 4,
    name: "Classic",
    price: "72.00",
    sku: 'GHI123',
    shortDesc: 'Introducing our stylish Wall Clock with Copper Trim and Roman Numeral Numbers - a stunning addition to any room in your home or office',
    description: `
This elegant timepiece features a classic design with a modern twist, making it the perfect blend of traditional and contemporary style.
<br/><br />
The clock face is a crisp white, with a clear glass cover that protects the clock mechanism while also providing a sleek and stylish look. The copper trim around the edge of the clock face adds a touch of sophistication and warmth to the overall design.
<br/><br />
The clock is designed with large, easy-to-read Roman numeral numbers that add a timeless elegance to the piece. The hour and minute hands are sleek and thin, with a glossy black finish that complements the copper trim. The second hand is also present and sweeps smoothly around the clock face, ensuring accurate timekeeping.
<br/><br />
At 14 inches in diameter, this wall clock is the perfect size for any room in your home or office. It's easy to install, with a built-in hanger on the back that allows you to mount it on any wall.
<br/><br />
Crafted with the highest standards of quality and attention to detail, this wall clock is built to last and is sure to become a reliable timekeeper for years to come. Whether you're looking for a clock to complement a modern or traditional decor, this stunning piece is sure to fit the bill.
<br/><br />
Don't settle for a boring or outdated clock - choose our Wall Clock with Copper Trim and Roman Numeral Numbers to add a touch of elegance and sophistication to your space. It's a beautiful and functional piece that you'll enjoy for years to come.
`,
    image:
      "http://localhost:3000/images/products/classic.png"
  },
  {
    id: 5,
    name: "Cutlery",
    price: "99.00",
    sku: 'JKL456',
    shortDesc: 'Introducing the unique and whimsical Wall Clock with Forks and Spoons Welded Around the Outside - a one-of-a-kind timepiece that is sure to make a statement in any kitchen or dining room.',
    description: `
This clock features a creative design that is both functional and decorative, with utensils welded around the edge to form a star shape.
<br/><br />
The clock face is a crisp white, with large, easy-to-read black Arabic numerals that stand out against the background. The hour, minute, and second hands are all shaped like delicate silver arrows, adding a touch of elegance to the overall design.
<br/><br />
Measuring 16 inches in diameter, this wall clock is the perfect size for any kitchen or dining room. It's easy to install, with a built-in hanger on the back that allows you to mount it on any wall.
<br/><br />
Crafted with the highest standards of quality and attention to detail, this wall clock is built to last and will provide you with accurate timekeeping for years to come. It's a unique and playful addition to any home, and is sure to spark conversation and admiration from guests.
<br/><br />
Whether you're a foodie, a chef, or simply someone who appreciates creative and functional design, this Wall Clock with Forks and Spoons Welded Around the Outside is a must-have for your kitchen or dining room. It's a fun and functional piece that will bring a smile to your face every time you check the time.
`,
    image:
      "http://localhost:3000/images/products/cutlery.png"
  },
  {
    id: 6,
    name: "Elegant",
    price: "65.00",
    sku: 'MNO789',
    shortDesc: 'Introducing our elegant Wall Clock - a stunning timepiece that adds a touch of sophistication and style to any room in your home or office.',
    description: `
This clock is designed with a classic yet modern aesthetic that is sure to catch the eye and become a focal point of your decor.
<br/><br />
The clock face is a crisp white, with large, easy-to-read black Arabic numerals that stand out against the background. The hour and minute hands are thin and sleek, with a glossy black finish that complements the overall design. The second hand is present and sweeps smoothly around the clock face, ensuring accurate timekeeping.
<br/><br />
At 12 inches in diameter, this wall clock is the perfect size for any room in your home or office. It's easy to install, with a built-in hanger on the back that allows you to mount it on any wall.
<br/><br />
Crafted with the highest standards of quality and attention to detail, this wall clock is built to last and is sure to become a reliable timekeeper for years to come. Whether you're looking for a clock to complement a modern or traditional decor, this stunning piece is sure to fit the bill.
<br/><br />
Don't settle for a boring or uninspired clock - choose our elegant Wall Clock to add a touch of sophistication and style to your space. It's a beautiful and functional piece that you'll enjoy for years to come.
`,
    image:
      "http://localhost:3000/images/products/elegant.png"
  },
  {
    id: 7,
    name: "Empty",
    price: "66.00",
    sku: 'PQR123',
    shortDesc: 'Introducing the innovative and unique Wall Clock with Separate Dots - a minimalist timepiece that offers a fresh take on traditional clock design',
    description: `
This clock consists only of the hour, minute, and second hands, with separate dots that can be stuck to the wall to mark the positions of each hour.
<br/><br />
The clock hands are sleek and thin, with a glossy black finish that complements any decor. The second hand sweeps smoothly around the clock face, ensuring accurate timekeeping. The dots that mark the positions of the hours are made from high-quality materials and are designed to stick to any wall without leaving a residue.
<br/><br />
Measuring 12 inches in diameter, this wall clock is the perfect size for any room in your home or office. The separate dots allow you to customize the placement of the hours to suit your preferences and the layout of your space.
<br/><br />
Crafted with the highest standards of quality and attention to detail, this wall clock is built to last and will provide you with reliable timekeeping for years to come. It's a functional and minimalist piece that is perfect for those who appreciate clean lines and simple design.
<br/><br />
If you're looking for a wall clock that offers a unique take on traditional clock design, the Wall Clock with Separate Dots is the perfect choice. It's a beautiful and functional piece that will enhance the look of any space and provide you with accurate timekeeping in a minimalist and modern way.
`,
    image:
      "http://localhost:3000/images/products/empty.png"
  },
  {
    id: 8,
    name: "Forest",
    price: "60.00",
    sku: 'STU456',
    shortDesc: 'Introducing the stunning Hand Carved Wooden Deer and Forest Wall Clock - a one-of-a-kind timepiece that combines the beauty of nature with the functionality of a clock.',
    description: `
This clock features a gorgeous wooden frame that has been hand-carved to depict a serene forest scene complete with a majestic deer.
<br/><br />
The clock face is a rich, dark brown, with large, easy-to-read black Arabic numerals that stand out against the background. The hour, minute, and second hands are shaped like delicate silver arrows, adding a touch of elegance to the overall design.
<br/><br />
Measuring 18 inches in diameter, this wall clock is the perfect size for any living room or den. The wooden frame is sturdy and durable, with a built-in hanger on the back that allows you to mount it on any wall.
<br/><br />
Crafted with the highest standards of quality and attention to detail, this wall clock is built to last and will provide you with accurate timekeeping for years to come. The hand-carved wooden frame is a testament to the skill and artistry of the craftsmen who created it, and is sure to become a cherished heirloom in your family.
<br/><br />
Whether you're a nature lover, a hunter, or simply someone who appreciates beautiful and functional design, this Hand Carved Wooden Deer and Forest Wall Clock is a must-have for your home. It's a unique and stunning piece that will add warmth and character to any room, and is sure to be admired by all who see it.
`,
    image:
      "http://localhost:3000/images/products/forest.png"
  },
  {
    id: 9,
    name: "Garden",
    price: "56.99",
    sku: 'VWX789',
    shortDesc: 'Introducing the Large Outdoor Wall Clock with Metal Frame and Roman Numeral Numbers - a stylish and functional timepiece that is perfect for any outdoor space.',
    description: `
This clock features a durable metal frame that is built to withstand the elements, ensuring reliable timekeeping year after year.
<br/><br />
The clock face is a crisp white, with large, easy-to-read black Roman numerals that stand out against the background. The hour and minute hands are shaped like delicate black arrows, adding a touch of elegance to the overall design. The second hand is present and sweeps smoothly around the clock face, ensuring accurate timekeeping.
<br/><br />
Measuring 24 inches in diameter, this wall clock is large enough to be seen from a distance, making it perfect for large outdoor spaces such as patios, decks, or pool areas. The metal frame is sturdy and durable, with a built-in hanger on the back that allows you to mount it on any outdoor wall.
<br/><br />
Crafted with the highest standards of quality and attention to detail, this wall clock is built to last and is sure to become a reliable timekeeper for your outdoor space. Whether you're hosting a backyard barbecue or simply enjoying a quiet evening outside, this stunning piece is sure to enhance the look and feel of your outdoor living area.
<br/><br />
If you're looking for a large and durable outdoor clock that combines style and functionality, the Large Outdoor Wall Clock with Metal Frame and Roman Numeral Numbers is the perfect choice. It's a beautiful and functional piece that you'll enjoy for years to come.
`,
    image:
      "http://localhost:3000/images/products/garden.png"
  },
  {
    id: 10,
    name: "Green",
    price: "49.00",
    sku: 'YZA123',
    shortDesc: 'Introducing the Vibrant Lime Green Wall Clock - a bold and eye-catching timepiece that will add a pop of color to any room.',
    description: `
This clock features an all-lime green design with large, easy-to-read white numerals that stand out against the background. The hour, minute, and second hands are also white, ensuring accurate timekeeping and easy readability.
<br/><br />
Measuring 12 inches in diameter, this wall clock is the perfect size for any room in your home. The lime green frame is made of a durable plastic material that is lightweight and easy to hang on any wall. Plus, the clock runs on a reliable quartz movement, ensuring precise timekeeping for years to come.
<br/><br />
With its bold and vibrant color scheme, this wall clock is the perfect addition to any modern or contemporary decor. Whether you're looking to add a touch of whimsy to a child's bedroom or a burst of color to a minimalist living room, this clock is sure to make a statement.
<br/><br />
If you're looking for a fun and functional wall clock that combines style and reliability, the Vibrant Lime Green Wall Clock is the perfect choice. It's a beautiful and unique timepiece that you'll enjoy for years to come.
`,
    image:
      "http://localhost:3000/images/products/green.png"
  },
  {
    id: 11,
    name: "Industrial",
    price: "45.00",
    sku: 'BCD456',
    shortDesc: 'Introducing the Industrial Quartz Wall Clock - a rugged and stylish timepiece that\'s perfect for any industrial-style decor.',
    description: `
With its sleek design and durable construction, this clock will add a touch of sophistication to any room in your home or office.
<br/><br />
Featuring a bold black metal frame with exposed rivets, this clock has an industrial look and feel that's sure to impress. The large white numerals and hands stand out against the black background, making it easy to read the time from a distance. The clock also features a quartz movement, ensuring reliable and accurate timekeeping.
<br/><br />
Measuring 14 inches in diameter, this wall clock is the perfect size for any room in your home or office. It's easy to hang on any wall using the built-in hanger on the back of the clock, and the battery-operated quartz movement ensures that you won't have to worry about winding or resetting the clock.
<br/><br />
If you're looking for a stylish and functional wall clock that combines rugged industrial style with precise timekeeping, the Industrial Quartz Wall Clock is the perfect choice. It's a unique and eye-catching timepiece that's sure to become a conversation starter in any room.
`,
    image:
      "http://localhost:3000/images/products/industrial.png"
  },
  {
    id: 12,
    name: "Marble",
    price: "75.00",
    sku: 'EFG789',
    shortDesc: 'elevate the look of any room.',
    description: `
This stunning wall clock is crafted from a circular piece of real marble, giving it a natural and unique look that is sure to impress.
<br/><br />
Featuring an elegant gold hour, minute, and second hand, this clock is the perfect blend of modern and classic style. The large, easy-to-read numerals in gold stand out beautifully against the rich natural colors of the marble, making it easy to tell the time at a glance.
<br/><br />
Measuring 12 inches in diameter, this wall clock is the perfect size for any room in your home. The clock face is smooth and polished, with a slight sheen that adds a touch of sophistication to the overall design. Plus, the clock runs on a reliable quartz movement, ensuring precise timekeeping for years to come.
<br/><br />
If you're looking for a wall clock that combines elegance and style with natural beauty, the Elegant Marble Wall Clock is the perfect choice. It's a stunning piece that's sure to become a focal point in any room. Whether you're adding it to a living room, bedroom, or office, this clock is sure to impress.
`,
    image:
      "http://localhost:3000/images/products/marble.png"
  },
  {
    id: 13,
    name: "Mini Grand",
    price: "56.25",
    sku: 'HIJ123',
    shortDesc: 'Introducing the Mini Grandfather Clock Wall Clock - a beautiful and charming timepiece that evokes the classic style of a full-size grandfather clock in a compact design.',
    description: `
This clock is the perfect addition to any home or office that values traditional style and elegant design.
<br/><br />
Crafted from solid wood with a rich, warm finish, this mini grandfather clock features intricate carved details and a gracefully arched top that give it a classic look and feel. The clock face is framed by a beautiful brass bezel, and the large, easy-to-read Roman numerals and hands make it easy to tell the time at a glance.
<br/><br />
Measuring 25 inches in height, this wall clock is the perfect size for any room in your home or office. The clock runs on a reliable quartz movement, ensuring accurate timekeeping without the need for winding or resetting.
<br/><br />
If you're looking for a wall clock that combines classic style with modern convenience, the Mini Grandfather Clock Wall Clock is the perfect choice. It's a timeless piece that's sure to add warmth and elegance to any room. Whether you're placing it in a living room, dining room, or entryway, this clock is sure to become a treasured addition to your decor.
`,
    image:
      "http://localhost:3000/images/products/mini-grand.png"
  },
  {
    id: 14,
    name: "Minimal",
    price: "57.00",
    sku: 'KLM456',
    shortDesc: 'Introducing the Minimalist Wall Clock - a sleek and stylish timepiece that\'s perfect for any modern decor.',
    description: `
This simple yet elegant wall clock features a clean, uncluttered design that will complement any room in your home or office.
<br/><br />
The clock face is white with small, unobtrusive black numerals that add just enough detail to make the time easily readable. The hour, minute, and second hands are also black, making them stand out against the white background. The clock face measures 10 inches in diameter, making it the perfect size for any wall.
<br/><br />
With its precise quartz movement, this wall clock will keep accurate time for years to come. It runs on a single AA battery, making it easy to install and maintain. Plus, the clock's simple design means that it will never go out of style, making it a timeless addition to any decor.
<br/><br />
If you're looking for a wall clock that combines simplicity and functionality, the Minimalist Wall Clock is the perfect choice. Its unassuming design and reliable timekeeping make it an ideal addition to any room. Whether you're placing it in a bedroom, kitchen, or office, this clock is sure to become a staple in your decor.
`,
    image:
      "http://localhost:3000/images/products/minimal.png"
  },
  {
    id: 15,
    name: "Copper Trim",
    price: "84.00",
    sku: 'NOP789',
    shortDesc: 'Introducing the Copper Trim Wall Clock - a stylish and elegant timepiece that\'s perfect for any modern decor. ',
    description: `
This beautiful wall clock features a sleek, minimal design with a clean, uncluttered face.
<br/><br />
The clock face is white with small, unobtrusive black numerals that add just enough detail to make the time easily readable. The hour, minute, and second hands are also black, making them stand out against the white background. The clock face measures 12 inches in diameter, making it the perfect size for any wall.
<br/><br />
The standout feature of this clock is its copper trim, which frames the clock face and adds a touch of sophistication to its design. The copper finish has a beautiful, warm glow that will complement any decor style.
<br/><br />
With its precise quartz movement, this wall clock will keep accurate time for years to come. It runs on a single AA battery, making it easy to install and maintain. Plus, the clock's simple design means that it will never go out of style, making it a timeless addition to any decor.
<br/><br />
If you're looking for a wall clock that combines simplicity and elegance, the Copper Trim Wall Clock is the perfect choice. Its clean design and reliable timekeeping make it an ideal addition to any room. Whether you're placing it in a living room, dining room, or office, this clock is sure to become a treasured addition to your decor.
`,
    image:
      "http://localhost:3000/images/products/copper-trim.png"
  },
  {
    id: 16,
    name: "Modern",
    price: "60.00",
    sku: 'QRS123',
    shortDesc: 'Introducing the Modern Wooden Trim Wall Clock - a contemporary timepiece that blends the warmth of natural wood with sleek modern design.',
    description: `
This stylish wall clock features a minimalist face with small, unobtrusive black numerals that allow the beauty of the wood trim to shine.
<br/><br />
The clock face is white with a subtle texture that adds depth and interest to the design. The hour, minute, and second hands are black, making them easy to read against the white background. The clock face measures 12 inches in diameter, making it a perfect size for any wall.
<br/><br />
The standout feature of this clock is its wooden trim, which frames the clock face and adds warmth and texture to its design. The natural wood finish has a beautiful, rich tone that will complement any decor style.
`,
    image:
      "http://localhost:3000/images/products/modern.png"
  },
  {
    id: 17,
    name: "Neon",
    price: "59.00",
    sku: 'TUV456',
    shortDesc: 'Introducing the Neon Circle Wall Clock - a unique and eye-catching timepiece that will add a touch of modern artistry to any room.',
    description: `
This striking wall clock features a minimalist design with a neon circle as the clock face and sleek black hands that stand out against the bright background.
<br/><br />
The clock face is a simple circle of bright neon light that casts a warm, inviting glow across the room. The black hands are long and slender, adding to the clock's minimalist aesthetic. The clock measures 12 inches in diameter, making it a perfect size for any wall.
<br/><br />
The standout feature of this clock is its neon circle face, which adds a vibrant pop of color to its design. Whether you choose pink, blue, green, or yellow, this clock is sure to become a focal point in any room.
<br/><br />
With its precise quartz movement, this wall clock will keep accurate time for years to come. It runs on a single AA battery, making it easy to install and maintain. Plus, the clock's simple design means that it will never go out of style, making it a timeless addition to any decor.
<br/><br />
If you're looking for a wall clock that is both unique and functional, the Neon Circle Wall Clock is the perfect choice. Its minimalist design and vibrant colors make it an ideal addition to any room in your home or office. Whether you're placing it in a living room, bedroom, or workspace, this clock is sure to add a touch of modern artistry to your decor.
`,
    image:
      "http://localhost:3000/images/products/neon.png"
  },
  {
    id: 18,
    name: "Orange",
    price: "57.00",
    sku: 'WXY789',
    shortDesc: 'Introducing the Minimalist White Wall Clock - a sleek and stylish timepiece that will add a touch of modern elegance to any room.',
    description: `
This wall clock features a simple and understated design with a completely white face, raised numbers, and an orange outline that creates a beautiful contrast against the white background.
<br/><br />
The clock face is completely white, making it easy to read the time at a glance. The numbers are raised and finished in a matte white, giving them a subtle texture that adds depth and interest to the design. The hour, minute, and second hands are also white, creating a clean and cohesive look.
<br/><br />
The standout feature of this clock is its orange outline, which adds a pop of color and contrast to the minimalist design. The outline is sleek and modern, perfectly complementing the clean lines and simple aesthetic of the clock.
<br/><br />
Measuring 12 inches in diameter, this wall clock is the perfect size for any room. Its precise quartz movement ensures accurate timekeeping, while its easy-to-install design makes it a breeze to hang on any wall.
<br/><br />
If you're looking for a wall clock that combines functionality and style, the Minimalist White Wall Clock is the perfect choice. Its simple yet elegant design is versatile enough to complement any decor style, from modern to traditional. Plus, its neutral color palette makes it an easy addition to any room in your home or office.
`,
    image:
      "http://localhost:3000/images/products/orange.png"
  },
  {
    id: 19,
    name: "Quirky",
    price: "32.00",
    sku: 'ZAB123',
    shortDesc: 'Introducing the Gothic Wall Clock - a striking and unique timepiece that adds a touch of dark elegance to any room.',
    description: `
This wall clock features a gothic-inspired design with intricate numbers and clock hands that will transport you to another time.
<br/><br />
The clock face is designed with gothic-inspired numbers that are large and easy to read. The intricate details of the numbers create a bold and dramatic look that will make a statement in any room. The hour, minute, and second hands are also designed with a gothic twist, featuring intricate curves and points that are reminiscent of Gothic architecture.
<br/><br />
Measuring 14 inches in diameter, this wall clock is the perfect size for any room. Its precise quartz movement ensures accurate timekeeping, while its easy-to-install design makes it a breeze to hang on any wall. The clock is crafted from high-quality materials that are built to last, ensuring that it will be a cherished piece in your home for years to come.
<br/><br />
If you're looking for a wall clock that is both functional and stylish, the Gothic Wall Clock is the perfect choice. Its unique design is sure to impress and its accurate timekeeping ensures that you will never be late again. Whether you're a fan of Gothic architecture or simply appreciate a striking and unique design, this clock is a must-have for your home or office.
`,
    image:
      "http://localhost:3000/images/products/quirky.png"
  },
  {
    id: 20,
    name: "Seconds",
    price: "69.00",
    sku: 'CDE456',
    shortDesc: 'Introducing the Classic Black and White Wall Clock - a timeless addition to any room.',
    description: `
This clock features a simple yet elegant design with bold black numbers that are easy to read against the crisp white background.
<br/><br />
The clock face includes markers for each second, ensuring that you can keep track of time down to the smallest increment. Its precise quartz movement ensures accurate timekeeping, while its easy-to-install design makes it a breeze to hang on any wall.
<br/><br />
Measuring 12 inches in diameter, this wall clock is the perfect size for any room. Its classic design makes it versatile enough to complement any decor, whether you're looking for a clock for your living room, bedroom, or office.
<br/><br />
Crafted from high-quality materials, this wall clock is built to last. Its durable construction ensures that it will be a reliable timepiece in your home for years to come. With its simple and classic design, this clock is a great option for anyone looking for a reliable and stylish timepiece that will stand the test of time.
<br/><br />
Whether you're keeping track of time while working from home, cooking in the kitchen, or simply need to know the time of day, the Classic Black and White Wall Clock is the perfect choice. Its timeless design and accurate timekeeping make it a must-have for any home or office.
`,
    image:
      "http://localhost:3000/images/products/seconds.png"
  },
  {
    id: 21,
    name: "Simple",
    price: "69.00",
    sku: 'FGH789',
    shortDesc: 'Introducing the Bold Black and White Wall Clock - a striking timepiece that makes a statement in any room.',
    description: `
This clock features a sleek black background with bold white numbers that stand out for easy reading.
<br/><br />
Unlike traditional wall clocks, the Bold Black and White Wall Clock features only the 12, 3, 6, and 9 numbers, each in a large format that adds to its modern aesthetic. The absence of other numbers and markers creates a clean and minimalist look, perfect for those who prefer a simple yet bold design.
<br/><br />
Measuring at 12 inches in diameter, this wall clock is the perfect size for any room. Its black and white color scheme makes it a versatile piece that complements any decor, whether you're looking to add a modern touch to your living room or a bold statement in your office.
<br/><br />
With its accurate quartz movement, the Bold Black and White Wall Clock ensures precise timekeeping. Its easy-to-install design makes it a breeze to hang on any wall, allowing you to enjoy its sleek and modern design in no time.
<br/><br />
Crafted from high-quality materials, this wall clock is built to last. Its durable construction ensures that it will be a reliable timepiece in your home for years to come. With its bold design and accurate timekeeping, the Bold Black and White Wall Clock is a must-have for anyone looking for a modern and stylish timepiece.
`,
    image:
      "http://localhost:3000/images/products/simple.png"
  },
  {
    id: 22,
    name: "Slate",
    price: "77.00",
    sku: 'IJK123',
    shortDesc: 'Introducing the Slate and Metal Wall Clock - a unique and stylish timepiece that adds a touch of sophistication to any room.',
    description: `
This clock features a circular piece of slate as its face, creating a natural and earthy aesthetic that is both timeless and modern.
<br/><br />
The Slate and Metal Wall Clock features a sleek silver hour hand and a stylish gold minute hand, adding a touch of elegance to its overall design. Its minimalist look is perfect for those who prefer simple and uncluttered decor.
<br/><br />
Measuring at 10 inches in diameter, this wall clock is the perfect size for any room. Its natural slate face and metallic hands make it a versatile piece that complements any decor, whether you're looking to add a touch of elegance to your bedroom or a rustic feel to your kitchen.
<br/><br />
With its accurate quartz movement, the Slate and Metal Wall Clock ensures precise timekeeping. Its easy-to-install design makes it a breeze to hang on any wall, allowing you to enjoy its unique and stylish design in no time.
<br/><br />
Crafted from high-quality materials, this wall clock is built to last. Its durable construction ensures that it will be a reliable timepiece in your home for years to come. With its natural slate face and stylish metallic hands, the Slate and Metal Wall Clock is a must-have for anyone looking for a unique and elegant timepiece.
`,
    image:
      "http://localhost:3000/images/products/slate.png"
  },
  {
    id: 23,
    name: "Square",
    price: "77.00",
    sku: 'LMN456',
    shortDesc: 'Introducing the Square Wall Clock - a sleek and modern timepiece that combines simplicity with functionality.',
    description: `
This clock features a clean and simple design, with a square face that is perfect for any contemporary space.
<br/><br />
Designed without any numbers, the Square Wall Clock focuses solely on the time, with a focus on clean lines and minimalist aesthetics. Its sleek and modern design is perfect for those who prefer simple and uncluttered decor.
<br/><br />
Measuring at 12 inches in width and height, this wall clock is the perfect size for any room. Its neutral design and black and white color scheme make it a versatile piece that complements any decor, whether you're looking to add a touch of sophistication to your office or a modern feel to your living room.
<br/><br />
With its accurate quartz movement, the Square Wall Clock ensures precise timekeeping. Its easy-to-install design makes it a breeze to hang on any wall, allowing you to enjoy its unique and modern design in no time.
<br/><br />
Crafted from high-quality materials, this wall clock is built to last. Its durable construction ensures that it will be a reliable timepiece in your home for years to come. With its minimalist design and focus on functionality, the Square Wall Clock is a must-have for anyone looking for a simple and stylish timepiece.
`,
    image:
      "http://localhost:3000/images/products/square.png"
  },
  {
    id: 24,
    name: "Wednesday",
    price: "34.00",
    sku: 'OPQ789',
    shortDesc: 'Introducing the Wednesday Addams Wall Clock - a one-of-a-kind timepiece that captures the essence of the iconic character from the Adams Family.',
    description: `
With its unique design and spooky aesthetic, this clock is the perfect addition to any fan's collection.
<br/><br />
This wall clock features a black and white design inspired by Wednesday Addams, with her signature braids and stern expression at the center of the clock face. The numbers on the clock are represented in a gothic font that adds to the eerie vibe of the piece.
<br/><br />
Measuring at 12 inches in diameter, this wall clock is the perfect size for any room in your home. Its unique design is sure to catch the eye of anyone who enters the room, making it a great conversation starter and a unique piece of decor.
<br/><br />
The Wednesday Addams Wall Clock is not just a stylish statement piece, but also a reliable timekeeper. The clock is powered by quartz movement, ensuring accurate and precise timekeeping for years to come.
<br/><br />
Crafted from high-quality materials, this clock is built to last. Its sturdy construction ensures that it can withstand the test of time, while its easy-to-hang design makes it a breeze to install on any wall.
<br/><br />
Whether you're a fan of the Adams Family or simply looking for a unique and spooky piece of decor, the Wednesday Addams Wall Clock is the perfect choice. Its unique design, reliable timekeeping, and high-quality construction make it a must-have for any collector or fan.
`,
    image:
      "http://localhost:3000/images/products/wednesday.png"
  },
  {
    id: 25,
    name: "Wooden",
    price: "34.00",
    sku: 'RST123',
    shortDesc: 'Introducing our all-wood wall clock, a beautiful and functional addition to any room in your home.',
    description: `
This clock is made entirely of high-quality, natural wood, giving it a warm and inviting look and feel.
<br/><br />
At 12 inches in diameter, this clock is the perfect size for any wall in your home. The minimalist design features simple black clock hands against a light wooden face, creating a sleek and modern look that blends seamlessly with any decor style.
<br/><br />
This clock is powered by quartz movement, ensuring accurate and reliable timekeeping for years to come. The clock hands move silently, making it a great choice for quiet spaces like bedrooms, nurseries, or libraries.
<br/><br />
Crafted from durable and sustainable materials, this clock is built to last. Its all-wood construction makes it sturdy and resistant to wear and tear, ensuring that it will continue to look beautiful for years to come.
<br/><br />
Easy to install and maintain, this clock is a hassle-free way to add a touch of warmth and style to any room in your home. Whether you're looking for a unique piece of decor or simply need a reliable timekeeper, our all-wood wall clock is the perfect choice.
`,
    image:
      "http://localhost:3000/images/products/wooden.png"
  },
  {
    id: 26,
    name: "Woodgrain",
    price: "34.00",
    sku: 'UVW456',
    shortDesc: 'Introducing our woodgrain wall clock, a stunning timepiece that combines functionality and style.',
    description: `
This clock features a natural woodgrain face that brings the beauty of nature into your home.
<br/><br />
Measuring at 12 inches in diameter, this clock is the perfect size for any wall in your home. The easy-to-read black clock hands and simple white markers ensure that you always know the time at a glance, while the woodgrain face adds a touch of warmth and texture to your decor.
<br/><br />
Powered by quartz movement, this clock is accurate and reliable. The clock hands move silently, making it perfect for use in bedrooms, nurseries, or any other quiet space.
<br/><br />
Crafted from high-quality materials, this clock is built to last. The woodgrain face is made from durable materials that resist scratches and dings, ensuring that your clock looks beautiful for years to come.
<br/><br />
Easy to install and maintain, this clock is a great addition to any room in your home. Whether you're looking to add a touch of natural beauty to your decor or simply need a reliable timekeeper, our woodgrain wall clock is the perfect choice.
`,
    image:
      "http://localhost:3000/images/products/woodgrain.png"
  }
];

const itemsPerPage = 8;

// Split the products array up into chunks, representing pages of products
const allProducts = products.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index/itemsPerPage)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, []);

export const loadPage = (pageNo) => {
  return allProducts[pageNo - 1]; // Array is 0-indexed
};

export const loadItem = (productId) => {
  return products.find((product) => product.id === Number(productId))
}

export const loadRelatedProducts = () => {
  const randomIds = Array.from({length: 4}, () => Math.random() * 20).map(number => Math.floor(number));
  return randomIds.map(id => loadItem(id));
}
