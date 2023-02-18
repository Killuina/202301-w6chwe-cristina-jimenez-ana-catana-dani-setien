const hardCodedData = {
  robots: [
    {
      _id: { $oid: "63efcf45e871c66135a96f55" },
      name: "C-3PO",
      image: "https://tinyurl.com/4ehhex6d",
      attributes: {
        speed: { $numberInt: "4" },
        resistance: { $numberInt: "7" },
        creationDate: "34 BBY",
      },
    },
    {
      _id: { $oid: "63efcfcae871c66135a96f57" },
      name: "Terminator",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fultimateclassicrock.com%2Ffirst-terminator-movie%2F&psig=AOvVaw3ThwAvlfgEOxkeqqtH1hJr&ust=1676743272702000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIC7gMuRnf0CFQAAAAAdAAAAABAK",
      attributes: {
        speed: { $numberInt: "10" },
        resistance: { $numberInt: "10" },
        creationDate: "October 26, 2029",
      },
    },
    {
      _id: { $oid: "63efd00ce871c66135a96f58" },
      name: "WALL-E",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mirror.co.uk%2Ftv%2Ftv-news%2Fvideo-review-wall-e-318867&psig=AOvVaw0rEbFhTN6C7swB6Z2w9tCK&ust=1676743407696000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCRs4uSnf0CFQAAAAAdAAAAABAE",
      attributes: {
        speed: { $numberInt: "5" },
        resistance: { $numberInt: "8" },
        creationDate: "April 20, 2105",
      },
    },
    {
      _id: { $oid: "63efd04ce871c66135a96f5a" },
      name: "HAL 9000",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbull.com%2Fes-es%2Ftecnologia-cientificos-crean-hal-9000&psig=AOvVaw3VV9_98KA6fMScBr4ZnT8K&ust=1676743523398000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjryMKSnf0CFQAAAAAdAAAAABAQ",
      attributes: {
        speed: { $numberInt: "1" },
        resistance: { $numberInt: "3" },
        creationDate: "April 6, 2001",
      },
    },
    {
      _id: { $oid: "63efd089e871c66135a96f5b" },
      name: "Bender",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvsbattles.fandom.com%2Fwiki%2FBender&psig=AOvVaw3Gu3_dtprlBSQiTqC1oPkd&ust=1676743651765000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC6s4CTnf0CFQAAAAAdAAAAABAJ",
      attributes: {
        speed: { $numberInt: "8" },
        resistance: { $numberInt: "5" },
        creationDate: "September 4, 2996",
      },
    },
  ],
};

export default hardCodedData;
