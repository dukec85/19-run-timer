< div class = "app" >
  <
  h1 class = "detail-title" > New Run < /h1>

<
ul class = "app-list details" >

  <
  li class = "app-list__item" >



  <
  p class = "app-list__item-date" > {
    {
      model.runDate
    }
  } < /p> <
  p class = "app-list__item-time" > {
    {
      model.runTime
    }
  } < /p> <
  /li> <
  p class = "run-notes" > {
    {
      model.runNotes
    }
  } < /p> <
  /ul> {
    {#
      link - to 'index'
    }
  } <
  h3 class = "circle-back" > < span > & #12296;</span></h3>

{{/link-to}}

{{# link - to 'edit'
model._id
}
} <
h3 class = "circle-edit" > < span > edit < /span></h
3 > {
    {
      /link-to}} <
      /div>
