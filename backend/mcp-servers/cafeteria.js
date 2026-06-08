

const DAILY_ITEMS = {
  breakfast: ["White & Brown Bread", "Sprouts", "Milk/Dahi/Tea/Coffee", "Bournvita (250ml)", "Butter/Peanut Butter", "Banana/Egg-1 & Jam", "Cornflakes", "Oats"],
  lunch: ["Butter Chapati", "Plain Rice", "Green Salad", "Pickle", "Green Chilli", "Lemon"],
  dinner: ["Butter Chapati", "Plain Rice", "Salad", "Pickle", "Green Chilli", "Fried Lemon"],
};


const bhawans = {

  

  ravindra: {
    id: "ravindra",
    name: "Ravindra Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "11:00 AM - 2:30 PM", dinner: "7:00 PM - 9:30 PM" },
    // Real data from user-uploaded photo (18-05-2026 to 24-05-2026)
    weeklyMenu: {
      monday: {
        breakfast: ["White Sauce Pasta", "Tomato Sauce", "Sandwich (Self Prepared)", "Chocos", ...DAILY_ITEMS.breakfast],
        lunch: ["Arhar Dal", "Bhindi Masala", "Veg Biriyani with Nuttri", "Boondi Raita (150gm)", "Roohafza", "Fryums", "Watermelon (150gm)", ...DAILY_ITEMS.lunch],
        dinner: ["Dal Urad", "Aloo Jeera", "Kathal Masala", "Gulab Jamun", ...DAILY_ITEMS.dinner],
      },
      tuesday: {
        breakfast: ["Idli Fried/Plain", "Coconut Chutney", "Sambhar", "Cornflakes", ...DAILY_ITEMS.breakfast],
        lunch: ["Dal Garlic Tadka", "Mix Veg", "Matar Vegetable Khichadi", "Dahi (150gm)", "Muskmelon", ...DAILY_ITEMS.lunch],
        dinner: ["Dal Urad Chana", "Chhola", "Ajwine Puri/Plain", "Sweet Kaddu", "Plain Rice", "Sewai Kheer", ...DAILY_ITEMS.dinner],
      },
      wednesday: {
        breakfast: ["Poha Namkeen", "Jalebi", "Imli Chutney", "CornFlakes", ...DAILY_ITEMS.breakfast],
        lunch: ["Rajmah Raseela", "Soya Keema", "Jeera Rice", "Plain Rice", "Fruit Custard", ...DAILY_ITEMS.lunch],
        dinner: ["Kadhai Paneer/Mughlai Chicken", "Dal Makhani", "Jeera Rice", "Chocolate Ice-cream (100ml)", ...DAILY_ITEMS.dinner],
      },
      thursday: {
        breakfast: ["Chhole", "Samosa", "Chopped Onion", "Tomato", "Green Chutney", "Sandwich (Self Prepared)", "Cornflakes", "Dahi/Milk", ...DAILY_ITEMS.breakfast],
        lunch: ["Kadhi Pyaj Pakoda", "Mix Kathoul", "Kali Masoor", "Fryums", "Vinegar Onion", "Nimbu Paani", "Watermelon (150gm)", ...DAILY_ITEMS.lunch],
        dinner: ["Dal Panchratan", "Bati", "Churma", "Moong Kofta", "Matar Pulao", ...DAILY_ITEMS.dinner],
      },
      friday: {
        breakfast: ["Suji Halwa", "Kala Chana", "Chocos", "Sandwich (Self Prepared)", ...DAILY_ITEMS.breakfast],
        lunch: ["Dal Garlic Tadka", "Louki Chana", "Arbi Masala", "Banana Shake (150gm)", ...DAILY_ITEMS.lunch],
        dinner: ["Dal Malka Masoor", "Soya Chap/Egg Keema (02 PC)", "Jeera Rice", "Motichoor Laddu (01pc)", ...DAILY_ITEMS.dinner],
      },
      saturday: {
        breakfast: ["Masala Dosa", "Sambhar", "Coconut Chutney", "Sandwich (Self Prepared)", "CornFlakes", ...DAILY_ITEMS.breakfast],
        lunch: ["Punjabi Chhola", "Bhatura", "Aloo Matar Semi Dry", "Garlic Tomato Chutney", "Boondi Raita (150gm)", "Onion Salad", "Pineapple (125gm)", "Shikanji", ...DAILY_ITEMS.lunch],
        dinner: ["Dal Arhar", "Fried Rice", "Hakka Noodles", "Manchurian", "Vanilla Ice-cream (100ml)", ...DAILY_ITEMS.dinner],
      },
      sunday: {
        breakfast: ["Aloo Pyaj Paratha", "Aloo Curry", "Tomato Chutney", "Dahi/Milk", ...DAILY_ITEMS.breakfast],
        lunch: ["Cabbage Matar Dry", "Moong Dal", "Tori Chana", "Lemon Rice", "Nimbu Pani", "Papaya (125gm)", ...DAILY_ITEMS.lunch],
        dinner: ["Paneer Biryani (60gm)/Chicken Biryani (150gm)", "Dal Makhni", "Veg Raita", "Moong Halwa", ...DAILY_ITEMS.dinner],
      },
    },
  },

  azad: {
    id: "azad",
    name: "Azad Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "11:00 AM - 2:30 PM", dinner: "7:00 PM - 9:30 PM" },
    
    weeklyMenu: {
      monday: {
        breakfast: ["Fried/Soup Maggi", "Tomato Sauce", "Oats", "Corn Mix Sprout", ...DAILY_ITEMS.breakfast],
        lunch: ["Kashmiri Dum Aloo", "Dal Chana Malka", "Curd Rice", "Aam Panaa", "Rasam", "Papaya", "Mix Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Mix Veg Fried", "Dal Moong Wadi", "Hari Chutney", "Jeera Rice", "Rabdi Jamun", "Salad", ...DAILY_ITEMS.dinner],
      },
      tuesday: {
        breakfast: ["Vada", "Sambhar", "Nariyal Chutney", "Chocos", "Peanut Mixed Sprout", ...DAILY_ITEMS.breakfast],
        lunch: ["Bangan Bharta", "Dal Arahar Tadak", "Rasam", "Veg Biryani with Nutri", "Fryums", "Boondi Raita", "Watermelon", "Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Cholla Ajwine Poori", "Kaddu Khata Metha", "Plain Rice", "Hari Chutney", "Rice Kheer", "Onion Mix Salad", ...DAILY_ITEMS.dinner],
      },
      wednesday: {
        breakfast: ["Poha", "Namkeen", "Jalebi", "T. Sauce", "Kala Chana Gravy", "Corn Mix Sprouts", ...DAILY_ITEMS.breakfast],
        lunch: ["Tinda Aloo Sabji", "Dal Arahar Tadka", "Lemon Rice", "Masala Chaas", "Kacha Aam Chutney", "Mango Shake", "Mix Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Matar Paneer/Chicken Curry", "Dal Mix Tadka", "Jeera Rice", "Gulabjamun", "Onion Salad", ...DAILY_ITEMS.dinner],
      },
      thursday: {
        breakfast: ["Suji Halwa", "Aloo Fried Sabji", "Plain Poori", "Mix Sprouts", ...DAILY_ITEMS.breakfast],
        lunch: ["Palak Pyaz Pakoda Kadhi", "Aloo Kala Chana Dry", "Kali Masoor Dal", "Plain Rice", "Rasna", "Sirka Onion", "Mix Fruit Chaat", ...DAILY_ITEMS.lunch],
        dinner: ["Bharwa Karela/Nugget Curry", "Dal Arahar Tadka", "Jeera Rice", "Pastry Mango", "Onion Mix Salad", ...DAILY_ITEMS.dinner],
      },
      friday: {
        breakfast: ["Veg Mayonnaise Sandwich", "Tomato Sauce", "Chocos", "Corn Mix Sprouts", ...DAILY_ITEMS.breakfast],
        lunch: ["Cholla", "Bhatura", "Rasam", "Aloo Matar", "Plain Rice", "Boondi Raita", "Muskmelon", "Onion Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Matar Mushroom/Egg Curry", "Dal Punjabi Tadka", "Plain Rice", "Besion Ladoo", "Mix Salad", ...DAILY_ITEMS.dinner],
      },
      saturday: {
        breakfast: ["Veg Utthapam", "Sambhar", "N. Chutney", "Oats", "Peanuts Mixed Sprouts", ...DAILY_ITEMS.breakfast],
        lunch: ["Kasmiri Dum Aloo", "Rajmah Masala", "Rasam", "Matar Khichdi", "Plain Rice", "Dahi", "Mango", "Mix Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Bhindi Masala", "Dal Urad (w) Chana", "Matar Pulao", "Ice-Cream (Vanilla)", "Mix Salad", ...DAILY_ITEMS.dinner],
      },
      sunday: {
        breakfast: ["Aloo Mix Paratha", "Aloo Sabji", "Lahsun Chutney", "T. Sauce", "Chocos", "Mix Sprout", ...DAILY_ITEMS.breakfast],
        lunch: ["Toori Chana Sabji", "Dal Arahar", "Sambhar", "Curd Rice", "Masala Chaas", "Aaam Panna", "Peach", "Kheera Onion Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Butter Paneer/Butter Chicken", "Jeera Rice", "Dal Makhani", "Lauki Burfi", "Onion Salad", ...DAILY_ITEMS.dinner],
      },
    },
  },

  cautley: {
    id: "cautley",
    name: "Cautley Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: {
        breakfast: ["Aloo Paratha", "Curd", "Pickle", "Chocos", ...DAILY_ITEMS.breakfast],
        lunch: ["Dal Tadka", "Mix Veg", "Jeera Rice", "Roti", "Boondi Raita", "Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Rajma", "Steamed Rice", "Roti", "Aloo Gobhi", "Gulab Jamun", ...DAILY_ITEMS.dinner],
      },
      tuesday: {
        breakfast: ["Idli", "Sambhar", "Coconut Chutney", "Cornflakes", ...DAILY_ITEMS.breakfast],
        lunch: ["Chole", "Bhature", "Mix Veg", "Rice", "Lassi", ...DAILY_ITEMS.lunch],
        dinner: ["Dal Makhani", "Rice", "Roti", "Palak Paneer", "Kheer", ...DAILY_ITEMS.dinner],
      },
      wednesday: {
        breakfast: ["Upma", "Peanut Chutney", "Banana", "Tea/Coffee", ...DAILY_ITEMS.breakfast],
        lunch: ["Sambar Rice", "Roti", "Dry Sabji", "Papad", "Curd", ...DAILY_ITEMS.lunch],
        dinner: ["Mixed Dal", "Rice", "Roti", "Kadai Paneer", "Halwa", ...DAILY_ITEMS.dinner],
      },
      thursday: {
        breakfast: ["Paratha", "Curd", "Pickle", ...DAILY_ITEMS.breakfast],
        lunch: ["Yellow Dal", "Rice", "Roti", "Baingan Bharta", "Chaas", ...DAILY_ITEMS.lunch],
        dinner: ["Chana Dal", "Rice", "Roti", "Shahi Paneer", "Rasgulla", ...DAILY_ITEMS.dinner],
      },
      friday: {
        breakfast: ["Dosa", "Sambhar", "Chutneys", ...DAILY_ITEMS.breakfast],
        lunch: ["Dal Fry", "Pulao", "Roti", "Aloo Matar", "Raita", ...DAILY_ITEMS.lunch],
        dinner: ["Pav Bhaji", "Rice", "Roti", "Dal", "Ice Cream", ...DAILY_ITEMS.dinner],
      },
      saturday: {
        breakfast: ["Chole Bhature", "Pickle", ...DAILY_ITEMS.breakfast],
        lunch: ["Special Biryani", "Raita", "Salan", "Salad", "Cold Drink", ...DAILY_ITEMS.lunch],
        dinner: ["Malai Kofta", "Rice", "Naan", "Dal", "Gajar Halwa", ...DAILY_ITEMS.dinner],
      },
      sunday: {
        breakfast: ["Puri Sabji", "Halwa", "Juice", ...DAILY_ITEMS.breakfast],
        lunch: ["Special Thali — Paneer + Dal + 3 Sabji + Rice + Roti + Sweet + Salad"],
        dinner: ["Pasta", "Soup", "Garlic Bread", "Dal", "Sweet", ...DAILY_ITEMS.dinner],
      },
    },
  },

  ganga: {
    id: "ganga",
    name: "Ganga Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: {
        breakfast: ["Poha", "Jalebi", "Imli Chutney", ...DAILY_ITEMS.breakfast],
        lunch: ["Dal Tadka", "Aloo Sabzi", "Jeera Rice", "Chapati", "Raita", ...DAILY_ITEMS.lunch],
        dinner: ["Rajma Chawal", "Roti", "Aloo Gobhi", "Sewai", ...DAILY_ITEMS.dinner],
      },
      tuesday: {
        breakfast: ["Idli", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast],
        lunch: ["Chole", "Rice", "Roti", "Mix Veg", "Lassi", ...DAILY_ITEMS.lunch],
        dinner: ["Dal Makhani", "Roti", "Rice", "Kadai Paneer", "Kheer", ...DAILY_ITEMS.dinner],
      },
      wednesday: {
        breakfast: ["Upma", "Green Chutney", ...DAILY_ITEMS.breakfast],
        lunch: ["Moong Dal", "Dum Aloo", "Jeera Rice", "Chapati", "Chaas", ...DAILY_ITEMS.lunch],
        dinner: ["Chana Dal", "Rice", "Roti", "Mix Veg", "Halwa", ...DAILY_ITEMS.dinner],
      },
      thursday: {
        breakfast: ["Aloo Paratha", "Curd", "Pickle", ...DAILY_ITEMS.breakfast],
        lunch: ["Dal Fry", "Baingan Bharta", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch],
        dinner: ["Kadhi Pakoda", "Rice", "Roti", "Aloo Matar", "Gulab Jamun", ...DAILY_ITEMS.dinner],
      },
      friday: {
        breakfast: ["Masala Dosa", "Sambhar", "Coconut Chutney", ...DAILY_ITEMS.breakfast],
        lunch: ["Rajma", "Rice", "Roti", "Aloo Palak", "Raita", ...DAILY_ITEMS.lunch],
        dinner: ["Paneer Butter Masala/Chicken Curry", "Rice", "Naan", "Dal", "Ice Cream", ...DAILY_ITEMS.dinner],
      },
      saturday: {
        breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast],
        lunch: ["Veg/Chicken Biryani", "Raita", "Salad", ...DAILY_ITEMS.lunch],
        dinner: ["Shahi Paneer", "Dal Tadka", "Rice", "Roti", "Kheer", ...DAILY_ITEMS.dinner],
      },
      sunday: {
        breakfast: ["Puri Sabji", "Suji Halwa", ...DAILY_ITEMS.breakfast],
        lunch: ["Special Sunday Thali — 3 Sabji + Dal + Rice + Roti + Sweet", ...DAILY_ITEMS.lunch],
        dinner: ["Pasta", "Manchurian", "Soup", "Garlic Bread", "Ice Cream", ...DAILY_ITEMS.dinner],
      },
    },
  },

  govind: {
    id: "govind",
    name: "Govind Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Bread Omelette", "Chocos", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Jeera Rice", "Mix Veg", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma Chawal", "Roti", "Bhindi", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli Sambhar", "Coconut Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Chole Rice", "Roti", "Mix Veg", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Makhani", "Roti", "Palak Paneer", "Rice Kheer", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Jalebi", "Imli Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Chana Masala", "Rice", "Roti", "Raita", "Halwa", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Paratha", "Curd", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Rice", "Roti", "Baingan", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Kadhi Pakoda", "Rice", "Roti", "Aloo Gobi", "Rasgulla", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Masala Dosa", "Sambhar", ...DAILY_ITEMS.breakfast], lunch: ["Rajma", "Pulao", "Roti", "Aloo Palak", ...DAILY_ITEMS.lunch], dinner: ["Paneer Tikka Masala/Egg Curry", "Rice", "Naan", "Dal", "Ice Cream", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast], lunch: ["Biryani", "Raita", "Salan", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Malai Kofta", "Naan", "Dal", "Gajar Halwa", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali — Paneer + Dal + 3 Sabji + Rice + Roti + Mithai", ...DAILY_ITEMS.lunch], dinner: ["Hakka Noodles", "Manchurian", "Soup", "Dal", "Ice Cream", ...DAILY_ITEMS.dinner] },
    },
  },

  jawahar: {
    id: "jawahar",
    name: "Jawahar Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Aloo Paratha", "Green Chutney", "Chocos", ...DAILY_ITEMS.breakfast], lunch: ["Dal Arhar", "Jeera Rice", "Mix Veg", "Roti", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Dal Urad", "Rice", "Roti", "Aloo Jeera", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Garlic Tadka", "Mix Veg", "Khichdi", "Dahi", ...DAILY_ITEMS.lunch], dinner: ["Chhola", "Puri", "Plain Rice", "Sewai Kheer", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Jalebi", ...DAILY_ITEMS.breakfast], lunch: ["Rajma", "Rice", "Roti", "Soya Keema", "Fruit Custard", ...DAILY_ITEMS.lunch], dinner: ["Kadhai Paneer/Chicken", "Dal Makhani", "Jeera Rice", "Ice Cream", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Chhole", "Samosa", "Tomato Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Kadhi Pakoda", "Mix Veg", "Rice", "Roti", "Nimbu Pani", ...DAILY_ITEMS.lunch], dinner: ["Dal Panchratan", "Churma Baati", "Matar Pulao", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Suji Halwa", "Kala Chana", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Louki Chana", "Rice", "Roti", "Banana Shake", ...DAILY_ITEMS.lunch], dinner: ["Dal Masoor", "Egg Keema/Soya Chap", "Jeera Rice", "Motichoor Laddu", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Masala Dosa", "Sambhar", "Coconut Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Punjabi Chhola", "Bhatura", "Aloo Matar", "Raita", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Dal Arhar", "Fried Rice", "Noodles", "Manchurian", "Ice Cream", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Aloo Paratha", "Aloo Curry", "Dahi/Milk", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Tori Chana", "Rice", "Nimbu Pani", "Papaya", ...DAILY_ITEMS.lunch], dinner: ["Paneer Biryani/Chicken Biryani", "Dal Makhni", "Veg Raita", "Moong Halwa", ...DAILY_ITEMS.dinner] },
    },
  },

  radhakrishnan: {
    id: "radhakrishnan",
    name: "Radhakrishnan Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Upma", "Coconut Chutney", "Chocos", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Aloo Matar", "Jeera Rice", "Chapati", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma", "Rice", "Roti", "Bhindi", "Kheer", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli Sambhar", "Vada", ...DAILY_ITEMS.breakfast], lunch: ["Chole Bhature", "Mix Veg", "Rice", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Makhani", "Palak Paneer", "Rice", "Roti", "Rasgulla", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Imli Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Arhar", "Jeera Rice", "Roti", "Mix Sabzi", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Kadai Paneer", "Dal", "Rice", "Roti", "Halwa", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Aloo Paratha", "Curd", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Baingan", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Chana Dal", "Rice", "Roti", "Aloo Gobi", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Dosa", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Aloo Sabji", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Paneer Butter Masala/Egg Curry", "Rice", "Naan", "Ice Cream", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", "Pickle", ...DAILY_ITEMS.breakfast], lunch: ["Veg Biryani/Chicken Biryani", "Raita", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Shahi Paneer", "Dal", "Naan", "Gajar Halwa", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Suji Halwa", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali — Paneer + Dal + 3 Sabji + Rice + Roti + Sweet", ...DAILY_ITEMS.lunch], dinner: ["Pasta", "Manchurian", "Soup", "Dal", "Ice Cream", ...DAILY_ITEMS.dinner] },
    },
  },

  rajendra: {
    id: "rajendra",
    name: "Rajendra Bhawan",
    type: "boys",
    note: "Main fresher hostel for B.Tech/B.Arch boys. Blocks A, B, C.",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Bread Butter", "Jam", "Poha", "Tea/Coffee", ...DAILY_ITEMS.breakfast], lunch: ["Dal Makhani", "Aloo Gobi", "Rice", "Roti", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma", "Rice", "Roti", "Mix Veg", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Chole", "Bhature", "Rice", "Mix Veg", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Tadka", "Jeera Rice", "Paneer Sabji", "Roti", "Kheer", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Aloo Paratha", "Curd", "Pickle", ...DAILY_ITEMS.breakfast], lunch: ["Arhar Dal", "Bhindi", "Rice", "Roti", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Kadhai Paneer/Chicken Curry", "Dal", "Rice", "Roti", "Ice Cream", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Poha", "Jalebi", "Chocos", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Chana Masala", "Rice", "Roti", "Halwa", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Masala Dosa", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Mix Sabzi", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Paneer Tikka/Egg Keema", "Rice", "Naan", "Dal", "Ladoo", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", "Pickle", ...DAILY_ITEMS.breakfast], lunch: ["Biryani", "Raita", "Salan", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Dal Arhar", "Fried Rice", "Hakka Noodles", "Manchurian", "Vanilla Ice Cream", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", "Dahi/Milk", ...DAILY_ITEMS.breakfast], lunch: ["Special Sunday Thali", ...DAILY_ITEMS.lunch], dinner: ["Paneer Biryani/Chicken Biryani", "Dal Makhni", "Raita", "Moong Halwa", ...DAILY_ITEMS.dinner] },
    },
  },

  rajiv: {
    id: "rajiv",
    name: "Rajiv Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Poha", "Jalebi", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Mix Veg", "Rice", "Roti", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma", "Rice", "Roti", "Bhindi", "Kheer", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Chole", "Rice", "Roti", "Mix Veg", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Makhani", "Roti", "Rice", "Paneer Sabji", "Halwa", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Upma", "Coconut Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Dum Aloo", "Rice", "Roti", ...DAILY_ITEMS.lunch], dinner: ["Kadhai Paneer", "Dal", "Rice", "Roti", "Ice Cream", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Aloo Paratha", "Curd", ...DAILY_ITEMS.breakfast], lunch: ["Dal Arhar", "Baingan Bharta", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Chana Dal", "Rice", "Roti", "Gobi Sabji", "Rasgulla", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Masala Dosa", "Sambhar", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Aloo Matar", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Butter Paneer/Egg Curry", "Rice", "Naan", "Dal", "Ladoo", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast], lunch: ["Biryani", "Raita", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Malai Kofta", "Naan", "Dal", "Gajar Halwa", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali", ...DAILY_ITEMS.lunch], dinner: ["Paneer/Chicken Biryani", "Dal Makhni", "Raita", "Moong Halwa", ...DAILY_ITEMS.dinner] },
    },
  },

  malviya: {
    id: "malviya",
    name: "Malviya Bhawan",
    type: "boys",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Bread Pakora", "Green Chutney", "Chocos", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Aloo Jeera", "Rice", "Roti", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma", "Rice", "Roti", "Aloo Gobhi", "Kheer", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Chole Bhature", "Rice", "Mix Veg", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Makhani", "Roti", "Palak Paneer", "Rice", "Halwa", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Jalebi", "Imli Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Arhar", "Mix Sabji", "Rice", "Roti", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Kadai Paneer/Chicken", "Dal", "Rice", "Roti", "Ice Cream", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Aloo Paratha", "Curd", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", ...DAILY_ITEMS.lunch], dinner: ["Chana Masala", "Rice", "Roti", "Raita", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Dosa", "Sambhar", "Chutneys", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Mix Veg", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Paneer Tikka Masala/Egg Keema", "Rice", "Naan", "Ladoo", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast], lunch: ["Veg/Chicken Biryani", "Raita", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Shahi Paneer", "Dal", "Naan", "Vanilla Ice Cream", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali", ...DAILY_ITEMS.lunch], dinner: ["Paneer/Chicken Biryani", "Dal Makhni", "Raita", "Moong Halwa", ...DAILY_ITEMS.dinner] },
    },
  },

  

  kasturba: {
    id: "kasturba",
    name: "Kasturba Bhawan",
    type: "girls",
    note: "Main girls hostel for freshers (B.Tech/B.Arch).",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Upma", "Coconut Chutney", "Cornflakes", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Mix Veg", "Jeera Rice", "Roti", "Boondi Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma", "Rice", "Roti", "Aloo Jeera", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli", "Sambhar", "Chutney", "Vada", ...DAILY_ITEMS.breakfast], lunch: ["Chole", "Bhature", "Mix Veg", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Makhani", "Roti", "Rice", "Palak Paneer", "Kheer", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Jalebi", ...DAILY_ITEMS.breakfast], lunch: ["Arhar Dal", "Bhindi", "Rice", "Roti", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Kadhai Paneer", "Dal", "Rice", "Roti", "Halwa", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Aloo Paratha", "Curd", "Pickle", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Chana Masala", "Rice", "Roti", "Boondi Raita", "Ice Cream", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Masala Dosa", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Mix Sabji", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Shahi Paneer", "Rice", "Naan", "Dal", "Rasgulla", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast], lunch: ["Veg Biryani", "Raita", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Malai Kofta", "Naan", "Dal", "Gajar Halwa", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", "Juice", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali — Paneer + Dal + 3 Sabji + Rice + Roti + Sweet", ...DAILY_ITEMS.lunch], dinner: ["Pasta", "Manchurian", "Soup", "Dal", "Ice Cream", ...DAILY_ITEMS.dinner] },
    },
  },

  sarojini: {
    id: "sarojini",
    name: "Sarojini Bhawan",
    type: "girls",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Aloo Paratha", "Curd", "Pickle", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Jeera Rice", "Aloo Gobhi", "Roti", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma", "Rice", "Roti", "Mix Veg", "Kheer", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli", "Sambhar", "Coconut Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Chole", "Rice", "Roti", "Baingan Bharta", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Makhani", "Palak Paneer", "Rice", "Naan", "Halwa", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Chocos", "Jalebi", ...DAILY_ITEMS.breakfast], lunch: ["Arhar Dal", "Mix Veg", "Rice", "Roti", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Kadhai Paneer", "Dal", "Rice", "Roti", "Ice Cream", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Upma", "Coconut Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Chana Dal", "Rice", "Roti", "Gobi Sabji", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Masala Dosa", "Sambhar", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Mix Sabji", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Shahi Paneer", "Rice", "Naan", "Dal", "Ladoo", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast], lunch: ["Veg Biryani", "Raita", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Malai Kofta", "Naan", "Dal", "Vanilla Ice Cream", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", "Juice", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali", ...DAILY_ITEMS.lunch], dinner: ["Pasta", "Manchurian", "Soup", "Dal", "Gajar Halwa", ...DAILY_ITEMS.dinner] },
    },
  },

  indira: {
    id: "indira",
    name: "Indira Bhawan",
    type: "girls",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Bread Pakora", "Green Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Tadka", "Jeera Rice", "Bhindi", "Roti", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma Chawal", "Roti", "Mix Veg", "Kheer", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli Sambhar", "Vada", ...DAILY_ITEMS.breakfast], lunch: ["Chole Bhature", "Mix Veg", "Rice", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Makhani", "Roti", "Kadai Paneer", "Rice", "Rasgulla", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Jalebi", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Aloo Sabji", "Rice", "Roti", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Chana Masala", "Rice", "Roti", "Halwa", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Aloo Paratha", "Curd", ...DAILY_ITEMS.breakfast], lunch: ["Dal Arhar", "Mix Veg", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Kadhi Pakoda", "Rice", "Roti", "Aloo Gobi", "Ice Cream", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Dosa", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Aloo Matar", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Shahi Paneer", "Naan", "Dal", "Rice", "Ladoo", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast], lunch: ["Veg Biryani", "Raita", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Malai Kofta", "Naan", "Dal", "Gajar Halwa", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali", ...DAILY_ITEMS.lunch], dinner: ["Paneer Biryani", "Dal Makhni", "Raita", "Moong Halwa", ...DAILY_ITEMS.dinner] },
    },
  },

  

  vigyan_kunj: {
    id: "vigyan_kunj",
    name: "Vigyan Kunj",
    type: "coed",
    note: "Newest co-ed hostel at IIT Roorkee.",
    messTimings: { breakfast: "7:30 AM - 9:30 AM", lunch: "12:00 PM - 2:30 PM", dinner: "7:30 PM - 9:30 PM" },
    weeklyMenu: {
      monday: { breakfast: ["Masala Dosa", "Sambhar", "Chutney", ...DAILY_ITEMS.breakfast], lunch: ["Dal Makhani", "Aloo Gobi", "Rice", "Roti", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Rajma", "Rice", "Roti", "Mix Veg", "Gulab Jamun", ...DAILY_ITEMS.dinner] },
      tuesday: { breakfast: ["Idli", "Sambhar", "Vada", ...DAILY_ITEMS.breakfast], lunch: ["Chole", "Bhature", "Mix Veg", "Lassi", ...DAILY_ITEMS.lunch], dinner: ["Dal Tadka", "Palak Paneer", "Rice", "Roti", "Kheer", ...DAILY_ITEMS.dinner] },
      wednesday: { breakfast: ["Poha", "Jalebi", ...DAILY_ITEMS.breakfast], lunch: ["Arhar Dal", "Bhindi", "Rice", "Roti", "Chaas", ...DAILY_ITEMS.lunch], dinner: ["Kadai Paneer/Chicken Curry", "Dal", "Rice", "Roti", "Ice Cream", ...DAILY_ITEMS.dinner] },
      thursday: { breakfast: ["Aloo Paratha", "Curd", ...DAILY_ITEMS.breakfast], lunch: ["Moong Dal", "Aloo Matar", "Rice", "Roti", "Shikanji", ...DAILY_ITEMS.lunch], dinner: ["Chana Masala", "Rice", "Roti", "Rasgulla", ...DAILY_ITEMS.dinner] },
      friday: { breakfast: ["Bread Omelette/Bread Butter", "Chocos", ...DAILY_ITEMS.breakfast], lunch: ["Dal Fry", "Pulao", "Roti", "Mix Sabji", "Raita", ...DAILY_ITEMS.lunch], dinner: ["Butter Paneer/Egg Curry", "Rice", "Naan", "Dal", "Ladoo", ...DAILY_ITEMS.dinner] },
      saturday: { breakfast: ["Chole Bhature", ...DAILY_ITEMS.breakfast], lunch: ["Biryani", "Raita", "Salan", "Salad", ...DAILY_ITEMS.lunch], dinner: ["Dal Arhar", "Fried Rice", "Hakka Noodles", "Manchurian", "Ice Cream", ...DAILY_ITEMS.dinner] },
      sunday: { breakfast: ["Puri Sabji", "Halwa", "Juice", ...DAILY_ITEMS.breakfast], lunch: ["Special Thali — Paneer + Dal + 3 Sabji + Rice + Roti + Sweet", ...DAILY_ITEMS.lunch], dinner: ["Paneer/Chicken Biryani", "Dal Makhni", "Raita", "Moong Halwa", ...DAILY_ITEMS.dinner] },
    },
  },
};


const canteens = {
  thomso_canteen: {
    name: "Thomso Canteen (Main Campus)",
    location: "Near Main Building",
    timings: "8:00 AM - 11:00 PM",
    popularItems: [
      { name: "Maggi", price: "₹30", available: true },
      { name: "Bread Omelette", price: "₹25", available: true },
      { name: "Chai", price: "₹10", available: true },
      { name: "Cold Coffee", price: "₹50", available: true },
      { name: "Samosa (2 pcs)", price: "₹15", available: true },
      { name: "Veg Sandwich", price: "₹30", available: true },
      { name: "Aloo Tikki Burger", price: "₹40", available: true },
      { name: "Pasta", price: "₹60", available: true },
      { name: "Momos (6 pcs)", price: "₹50", available: true },
      { name: "Paneer Roll", price: "₹55", available: true },
    ],
  },
  civil_canteen: {
    name: "Civil Engineering Canteen",
    location: "Civil Engineering Block",
    timings: "8:00 AM - 8:00 PM",
    popularItems: [
      { name: "Chai", price: "₹10", available: true },
      { name: "Maggi", price: "₹30", available: true },
      { name: "Samosa", price: "₹10", available: true },
      { name: "Veg Puff", price: "₹15", available: true },
      { name: "Cold Coffee", price: "₹40", available: true },
      { name: "Sandwich", price: "₹30", available: true },
    ],
  },
  ec_canteen: {
    name: "Electronics Block Canteen",
    location: "EC/EE Block",
    timings: "8:00 AM - 8:00 PM",
    popularItems: [
      { name: "Chai", price: "₹10", available: true },
      { name: "Bread Omelette", price: "₹25", available: true },
      { name: "Maggi", price: "₹30", available: true },
      { name: "Veg Burger", price: "₹40", available: true },
      { name: "French Fries", price: "₹40", available: true },
    ],
  },
  new_sac_canteen: {
    name: "SAC Canteen",
    location: "Students' Activity Centre",
    timings: "9:00 AM - 10:00 PM",
    popularItems: [
      { name: "Pizza Slice", price: "₹70", available: true },
      { name: "Momos", price: "₹50", available: true },
      { name: "Cold Coffee", price: "₹55", available: true },
      { name: "Cheese Sandwich", price: "₹45", available: true },
      { name: "Noodles", price: "₹60", available: true },
      { name: "Chai", price: "₹12", available: true },
    ],
  },
};


export const cafeteriaTools = [
  {
    name: "get_bhawan_menu",
    description: "Get mess menu for a specific IIT Roorkee bhawan/hostel for a specific day and meal. Use this for questions like 'What's for lunch in Azad Bhawan today?' or 'Show me Ravindra Bhawan dinner menu'.",
    input_schema: {
      type: "object",
      properties: {
        bhawan: { type: "string", description: "Bhawan/hostel name e.g. 'Azad', 'Ravindra', 'Kasturba', 'Ganga', 'Rajendra', 'Govind', 'Cautley', 'Jawahar', 'Radhakrishnan', 'Rajiv', 'Malviya', 'Sarojini', 'Indira', 'Vigyan Kunj'" },
        meal: { type: "string", description: "Meal: breakfast, lunch, or dinner. Leave empty for full day menu." },
        day: { type: "string", description: "Day of week: monday, tuesday, etc. Leave empty for today." },
      },
      required: ["bhawan"],
    },
  },
  {
    name: "get_all_bhawans_menu",
    description: "Get today's menu for ALL bhawans at once, or compare menus across multiple hostels for a specific meal.",
    input_schema: {
      type: "object",
      properties: {
        meal: { type: "string", description: "Meal: breakfast, lunch, or dinner" },
        day: { type: "string", description: "Day of week. Leave empty for today." },
        type: { type: "string", description: "Filter by hostel type: boys, girls, coed" },
      },
      required: [],
    },
  },
  {
    name: "get_canteen_menu",
    description: "Get menu and timings for campus canteens like Thomso Canteen, Civil Canteen, SAC Canteen, EC Canteen.",
    input_schema: {
      type: "object",
      properties: {
        canteen: { type: "string", description: "Canteen name or location. Leave empty for all canteens." },
      },
      required: [],
    },
  },
  {
    name: "list_all_bhawans",
    description: "List all IIT Roorkee hostels/bhawans with their type (boys/girls/coed) and mess timings.",
    input_schema: {
      type: "object",
      properties: {
        type: { type: "string", description: "Filter: boys, girls, or coed" },
      },
      required: [],
    },
  },
  {
    name: "find_dish_in_campus",
    description: "Search for a specific dish across all bhawan messes today. E.g. 'Where is Paneer Biryani today?' or 'Which mess has Gulab Jamun tonight?'",
    input_schema: {
      type: "object",
      properties: {
        dish: { type: "string", description: "Dish name to search for e.g. 'Rajma', 'Paneer Biryani', 'Ice Cream'" },
        meal: { type: "string", description: "Optional: breakfast, lunch, or dinner" },
      },
      required: ["dish"],
    },
  },
];



const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getToday() {
  return DAYS[new Date().getDay()];
}

function findBhawan(query) {
  const q = query.toLowerCase().trim();
  return Object.values(bhawans).find(b =>
    b.id === q ||
    b.name.toLowerCase().includes(q) ||
    b.id.replace("_", " ").includes(q)
  );
}

export function executeCafeteriaTool(toolName, toolInput) {
  switch (toolName) {

    case "get_bhawan_menu": {
      const bhawan = findBhawan(toolInput.bhawan);
      if (!bhawan) {
        const names = Object.values(bhawans).map(b => b.name).join(", ");
        return { error: `Bhawan "${toolInput.bhawan}" not found. Available bhawans: ${names}` };
      }
      const day = toolInput.day?.toLowerCase() || getToday();
      if (day === "sunday" && bhawan.id === "ravindra") {
        // Sunday is valid
      }
      const dayMenu = bhawan.weeklyMenu[day];
      if (!dayMenu) return { error: `No menu found for ${day}. Valid days: monday-sunday.` };

      if (toolInput.meal) {
        const meal = toolInput.meal.toLowerCase();
        return {
          bhawan: bhawan.name,
          type: bhawan.type,
          day,
          meal,
          items: dayMenu[meal] || [],
          timings: bhawan.messTimings[meal] || "Check mess notice board",
          note: bhawan.note || null,
        };
      }
      return {
        bhawan: bhawan.name,
        type: bhawan.type,
        day,
        menu: dayMenu,
        timings: bhawan.messTimings,
        note: bhawan.note || null,
      };
    }

    case "get_all_bhawans_menu": {
      const day = toolInput.day?.toLowerCase() || getToday();
      const meal = toolInput.meal?.toLowerCase();
      const typeFilter = toolInput.type?.toLowerCase();

      const result = [];
      for (const bhawan of Object.values(bhawans)) {
        if (typeFilter && bhawan.type !== typeFilter) continue;
        const dayMenu = bhawan.weeklyMenu[day];
        if (!dayMenu) continue;
        result.push({
          bhawan: bhawan.name,
          type: bhawan.type,
          menu: meal ? { [meal]: dayMenu[meal] || [] } : dayMenu,
          timings: bhawan.messTimings,
        });
      }
      return { day, meal: meal || "all meals", bhawans: result };
    }

    case "get_canteen_menu": {
      if (toolInput.canteen) {
        const q = toolInput.canteen.toLowerCase();
        const found = Object.values(canteens).find(c =>
          c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q)
        );
        if (!found) return { error: `Canteen not found. Available: ${Object.values(canteens).map(c => c.name).join(", ")}` };
        return found;
      }
      return { canteens: Object.values(canteens) };
    }

    case "list_all_bhawans": {
      const typeFilter = toolInput.type?.toLowerCase();
      const list = Object.values(bhawans)
        .filter(b => !typeFilter || b.type === typeFilter)
        .map(b => ({
          name: b.name,
          id: b.id,
          type: b.type,
          timings: b.messTimings,
          note: b.note || null,
        }));
      return { total: list.length, bhawans: list };
    }

    case "find_dish_in_campus": {
      const dish = toolInput.dish.toLowerCase();
      const day = getToday();
      const meal = toolInput.meal?.toLowerCase();
      const found = [];

      for (const bhawan of Object.values(bhawans)) {
        const dayMenu = bhawan.weeklyMenu[day];
        if (!dayMenu) continue;
        const mealsToCheck = meal ? [meal] : Object.keys(dayMenu);
        for (const m of mealsToCheck) {
          if (!dayMenu[m]) continue;
          const match = dayMenu[m].find(item => item.toLowerCase().includes(dish));
          if (match) found.push({ bhawan: bhawan.name, meal: m, dish: match, timing: bhawan.messTimings[m] });
        }
      }

      if (found.length === 0) return { found: false, message: `"${toolInput.dish}" not found in any mess today (${day}). Try checking another day.` };
      return { found: true, dish: toolInput.dish, day, results: found };
    }

    default:
      return { error: "Unknown cafeteria tool" };
  }
}