import React from 'react';
import Container from 'react-bootstrap/Container'


function CoreIntroText() {
  return (
    <Container id="" className=""> 
        <h1 className="spooky-text font-weight-bold mt-5 w-100 font-auto-size text-center">
            NIGHT OF THE ZEALOT
        </h1>
        <h6 className="spooky-text font-italic font-weight-bold my-3">
            The Ghouls Hunger…
        </h6>
        <p className="arno-text font-italic ">
            Friday, September 18, 1925. Arkham, Massachusetts. It is
            the end of a long and abnormally hot summer. The first hints
            of autumn beckon, but a heavy heat persists, relentless. A
            silent, unspoken anger grips the town. Tempers are short, and
            in the last week alone there have been numerous reports of
            townspeople coming to heated, violent blows with one another
            over simple misunderstandings.
        </p>
        
        <p className="arno-text font-italic ">
            And now, a call from James Hankerson. He claims to have
            found a dismembered body in his barn.
        </p>
        <p className="arno-text font-italic ">
            Blaming the weather would be too easy. There is something
            wrong with this town, and not a whole lot this old soothsayer
            can do to stop the slide. My auguries indicate a small group of
            investigators will soon take note of these strange happenings
            and set forth to make things right. I’ll be watching their
            progress…but I won’t be holding my breath.
        </p>
    </Container>
  )
}

export default CoreIntroText;