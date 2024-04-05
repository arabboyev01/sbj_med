import urology from '../../../../../../public/images/services/uralogia.svg'
import msk from '../../../../../../public/images/services/MSK.svg'
import rentgen from '../../../../../../public/images/services/Rentgen.svg'
import endkrinolog from '../../../../../../public/images/services/endikrinolog.svg'
import terapevt from '../../../../../../public/images/services/terapevt.svg'
import ekg from '../../../../../../public/images/services/ekg.svg'
import protsedura from '../../../../../../public/images/services/protcedure.svg'
import fizioterapia from '../../../../../../public/images/services/fizioterapiya.svg'
import massag from '../../../../../../public/images/services/message.svg'
import ozon from '../../../../../../public/images/services/ozon.svg'
import travmatolog from '../../../../../../public/images/services/travma.svg'
import lor from '../../../../../../public/images/services/lor.svg'
import utt from '../../../../../../public/images/services/utt.svg'
import labaratoria from '../../../../../../public/images/services/labarator.svg'

type servicesList = {
  id: number
  image: any
  text: string
}

export const data = (st: any) => {
    return [
    {
      id: 1,
      image: "/images/neurology.png",
      text: st("neurology"),
    },
    {
      id: 2,
      image: "/images/cardiology.png",
      text: st("cardiology"),
    },
    {
      id: 3,
      image: "/images/gynecology.png",
      text: st("gynecology"),
    },
    {
      id: 4,
      image: urology,
      text: st("urologia"),
    },
    {
      id: 5,
      image: msk,
      text: st("msk"),
    },
    {
      id: 6,
      image: rentgen,
      text: st("rentgen"),
    },
    {
      id: 7,
      image: endkrinolog,
      text: st("endkrinolog"),
    },
    {
      id: 8,
      image: terapevt,
      text: st("therapist"),
    },
    {
      id: 9,
      image: ekg,
      text: st("ekg"),
    },
    {
      id: 10,
      image: protsedura,
      text: st("protcedura"),
    },
    {
      id: 11,
      image: fizioterapia,
      text: st("physotherapy"),
    },
    {
      id: 12,
      image: massag,
      text: st("massage"),
    },
    {
      id: 13,
      image: ozon,
      text: st("ozone_therapy"),
    },
    {
      id: 14,
      image: travmatolog,
      text: st("traumatologist"),
    },
    {
      id: 15,
      image: lor,
      text: st("lor"),
    },
    {
      id: 16,
      image: utt,
      text: st("utt"),
    },
    {
      id: 17,
      image: labaratoria,
      text: st("labaratory"),
    },
  ];
}

export function sliceData(list: servicesList[], index: number) {
  const start = index * 3;
  const end = start + 3;
  return list.slice(start, end);
}