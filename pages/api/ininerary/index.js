import generateAction from "../../../helper/openaireq";
// TODO: Database save
const generateDestination = async (req, res) => {
  const { place, days, startdate, budget } = req.body;
  console.log({ place, days, startdate, budget });
  const prompt = `You are a professional travel advisor and know every places of the world including the activities that can be done, interesting places and facts. With your knowledge generate an itinerary of a trip using the following information. Please provide suggestions of activities, and some fun facts:
  BUDGET: Budget Friendly
  LOCATION: Darjeeling, India
  START DATE: 03/25/2023
  NUMBER OF DAYS OF TOUR: 5
  ADVICE: Great choice on selecting Darjeeling, India as your destination! Here's a suggested itinerary for your 5-day tour, with some fun facts and activity suggestions included:
  
  Day 1: Arrival and Sightseeing
  
  Upon arrival in Darjeeling, check in to your hotel and take a short rest.
  Visit the Tiger Hill viewpoint early in the morning to catch the sunrise over the Himalayas.
  Visit the Ghum Monastery, one of the oldest and largest Tibetan Buddhist monasteries in Darjeeling.
  Take a stroll through the colorful and vibrant Chowrasta Mall, a popular shopping and dining area.
  Fun fact: Darjeeling is known as the "Queen of the Hills" and is famous for its tea plantations, which produce some of the world's finest tea.
  
  Day 2: Cultural and Historical Exploration
  
  Visit the Himalayan Mountaineering Institute, which was founded in 1954 to promote mountaineering as an organized sport in India.
  Take a ride on the Darjeeling Himalayan Railway, also known as the "Toy Train," which is a UNESCO World Heritage Site and one of the oldest and most famous narrow-gauge railway systems in the world.
  Visit the Padmaja Naidu Himalayan Zoological Park, which is home to many rare and endangered Himalayan species, including the red panda and snow leopard.
  Visit the Japanese Peace Pagoda, a stunning Buddhist temple that was built to promote world peace and harmony.
  Fun fact: Darjeeling is home to some of the highest peaks in the world, including Mount Everest and Kanchenjunga, the third-highest peak in the world.
  
  Day 3: Tea Plantation Tour
  
  Take a guided tour of one of the many tea plantations in Darjeeling, such as the Happy Valley Tea Estate or the Glenburn Tea Estate.
  Learn about the history and process of tea production, from planting and plucking to drying and packing.
  Sample some of the world-famous Darjeeling tea and purchase some to take home as a souvenir.
  Fun fact: Darjeeling tea is considered one of the finest and most expensive varieties of tea in the world, with a unique flavor and aroma that is highly sought after by tea enthusiasts.
  
  Day 4: Outdoor Adventure
  
  Go for a scenic trek through the beautiful hills and forests surrounding Darjeeling, with options for both experienced and beginner trekkers.
  Visit the Tenzing Rock, a popular spot for rock climbing and named after Tenzing Norgay, the first person to reach the summit of Mount Everest with Sir Edmund Hillary.
  Take a ride on the Darjeeling Ropeway, a cable car that offers breathtaking views of the surrounding valleys and mountains.
  Visit the Singalila National Park, a stunning natural reserve that is home to many rare and endangered species of flora and fauna.
  Fun fact: Darjeeling is home to many rare and exotic bird species, including the colorful Himalayan Monal and the rare Blood Pheasant.
  
  Day 5: Departure
  
  Take a leisurely walk through the picturesque Darjeeling Botanical Garden, which is home to many rare and exotic plant species.
  Visit the local marketplaces to purchase some souvenirs and try some of the delicious local street food.
  Depart Darjeeling with unforgettable memories of your trip to this beautiful and fascinating destination.
  Fun fact: Darjeeling is one of the few places in India where you can witness a traditional yak race, which is held annually during the Tibetan New Year festival.
  
  BUDGET: ${budget}
  LOCATION: ${place}
  START DATE: ${startdate}
  NUMBER OF DAYS OF TOUR: ${days}
  ADVICE:`;
  const data = await generateAction(prompt, 2700);
  res.status(200).json({ data });
};

export default generateDestination;
