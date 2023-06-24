(() => {
  const pElem = document.getElementById("content");
  const buttonElem = document.getElementById("button");

  const handleChangeContent = () => {
    pElem.innerHTML =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorem est fugit dolorum voluptatibus voluptates. Non iure error, deserunt, provident quidem neque vero totam quos dolorum tempore consequuntur magni adipisci! \n Dignissimos alias natus velit harum. Ullam placeat minus voluptatibus cupiditate repellendus, quas incidunt reprehenderit labore repellat, vel repudiandae hic impedit saepe accusantium deleniti rem provident. Facere error est laborum nesciunt! \n A consequatur eaque quisquam ad reprehenderit modi fugit commodi amet excepturi. Quo, amet. Laboriosam iure molestiae nobis adipisci ea reprehenderit, aliquam debitis veritatis iste perferendis. Eos inventore vel hic rerum. \n Reprehenderit reiciendis a omnis perferendis, aut ipsa eveniet fugit rem impedit voluptates sapiente aspernatur perspiciatis enim. At cum voluptates commodi saepe itaque quisquam quasi? Sunt sapiente natus repellendus dolores. Aliquid. \n Porro nesciunt odit libero obcaecati temporibus laboriosam itaque tempore natus fugit quae, doloremque eos eaque vitae doloribus eius. Itaque architecto voluptatem quos unde vero quia, totam harum libero consequuntur impedit?";
  };

  const run = () => {
    buttonElem.addEventListener("click", handleChangeContent);
  };

  run();
})();
