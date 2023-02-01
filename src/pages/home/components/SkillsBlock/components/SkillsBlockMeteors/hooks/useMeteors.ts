export const useMeteors = (currentScroll) => {
  const meteor1Style = {
    transform: "translate(" + (currentScroll / 10 - 10) + "vw,0vw)",
  };
  const meteor2Style = {
    transform: "translate(" + -(currentScroll / 7 - 50) + "vw,0vw)",
  };
  const meteor3Style = {
    transform: "translate(" + -(currentScroll / 10 - 110) + "vw,0vw)",
  };
  const meteor4Style = {
    transform: "translate(" + -(currentScroll / 5 - 110) + "vw,0vw)",
  };
  const meteor5Style = {
    transform: "translate(" + (currentScroll / 10 - 70) + "vw,0vw)",
  };
  const meteor6Style = {
    transform: "translate(" + -(currentScroll / 5 - 190) + "vw,0vw)",
  };

  return {
    meteor1Style,
    meteor2Style,
    meteor3Style,
    meteor4Style,
    meteor5Style,
    meteor6Style,
  };
};
