import generateAction from "../../helper/openaireq";

const generateDestination = async (req, res) => {
  const { interests, likings, country } = req.body;
  console.log(country);
  const prompt = `Act like a travel advisor who has travelled across the world. Use the details to find out suitable destinations of visit. Write the places such that it can be searched in google maps. Just write the name of places followed by their country name and give a short description. Don't give unnecessary introduction, just provide the places in format [Place]:[Short Description]:
    INTERESTS: Mountains, Oceans
    COUNTRY: India
    LIKINGS: Culture, Food
    PLACES: Goa, India: Located on the west coast of India, Goa is known for its beautiful beaches, stunning ocean views, and rich cultural heritage. Visitors can explore historic churches and temples, sample delicious seafood and local cuisine, and enjoy a wide range of water sports and outdoor activities.
    
    Darjeeling, India: Nestled in the foothills of the Himalayas, Darjeeling is known for its stunning mountain views, tea plantations, and vibrant cultural scene. Visitors can take a scenic ride on the Darjeeling Himalayan Railway, explore Buddhist monasteries and temples, and sample delicious local cuisine.
    
    Agra, India: Home to the iconic Taj Mahal, Agra is a must-visit destination for anyone interested in Indian culture and history. Visitors can explore the stunning Mughal architecture of the Taj Mahal and nearby Agra Fort, as well as sample delicious local food and shop for traditional handicrafts.
    
    Shimla, India: Located in the scenic Himalayan foothills, Shimla is known for its stunning mountain views, colonial architecture, and rich cultural heritage. Visitors can explore historic buildings and museums, sample delicious local cuisine, and take in the breathtaking natural scenery.
    INTEREST: ${interests}
    COUNTRY: ${country}
    LIKINGS: ${likings}
    PLACES: `;
  const data = await generateAction(prompt);
  console.log(data);
  res.status(200).json({ data });
};

export default generateDestination;
