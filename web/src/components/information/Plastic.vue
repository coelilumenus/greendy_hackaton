<template>
  <div>
    <div class="flex">
      <div>
        <img src="./assets/images/plastic.png" />
      </div>

      <div class="flex flex-col space-y-1">
        <div class="bg-green-500">Легко перерабатывается</div>
        <div class="bg-green-500">Желательно подготовить</div>
        <div class="bg-green-500">Много пунктов приёма</div>
        <div class="bg-red-500">Исключения</div>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="font-bold text-lg">Пластик (ПЭТ, ПЭТФ)</div>

      <div class="text-gray-500">
        Бутылки из полиэтилентерефталата (ПЭТ, ПЭТФ) обозначаются кодом 01 (PET
        или PETE).
      </div>

      <div class="text-green-500">
        Принимаем: ПЭТ-бутылки из-под напитков и молочной продукции, прозрачные,
        белые, голубые, зеленые и коричневые, 19-ти литровые ПЭТ-кеги:
        прозрачные и коричневые.
      </div>

      <div class="text-red-500">
        Не принимаем: матовые бутылки, бутылки черного и кислотных цветов,
        бутылки из-под масла, ПЭТ-бутылки из-под бытовой химии, 19-ти литровые
        бутылки для воды.
      </div>
    </div>

    <div><img src="./assets/images/recycleBag.png" /></div>

    <div>
      <button
        class="
          mt-3
          w-full
          inline-flex
          justify-center
          rounded-md
          border border-gray-300
          shadow-sm
          px-4
          py-2
          bg-white
          text-base
          font-medium
          text-gray-700
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
          sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
        "
      >
        Сортировать
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>