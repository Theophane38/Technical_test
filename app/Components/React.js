import {useEffect, useRef, useState} from "react";

const React = () => {
  // On met le code sous format d'un tableau pour pouvoir manipuler plus facilement les chiffres
  const [value, setValue] = useState(Array(6).fill(''))
  // La valeur sous forme d'une string
  const [stringValue, setStringValue] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [wiggle, setWiggle] = useState(false)
  // On crée un tableau de refs qu'on va utiliser sur chacun des inout pour gérer les focus dynamiques
  const inputRef = useRef([])

  const onSubmit = () => {
    // Si le code est bon, on affiche le message de succès, sinon on fait vibrer le formulaire et on le réinitialise
    if (stringValue === '123654') setSuccess(true)
    else {
      setValue(Array(6).fill(''))
      setStringValue('')
      setWiggle(true)
      setError(true)
      inputRef.current[0].focus()
    }
  }

  useEffect(() => {
    // Submit auto quand les 6 chiffres sont renseignés
    if (stringValue.length === 6) onSubmit()
  }, [stringValue])

  const handleOnChange = (e, i) => {
    // On Vérifie qu'il s'agit bien d'un chiffre ou d'une suppression du caractère
    const rgx = /^[0-9\b]+$/;
    if (rgx.test(e.target.value) || !e.target.value.length) {
      setError(false)
      setSuccess(false)
      value[i] = e.target.value
      setStringValue(value.join(''))
      setValue(value)
      if (e.target.value.length && i < value.length - 1)
        inputRef.current[i + 1].focus()
    }
  }

  const handleKeydown = (e, i) => {
    // On gère les suppressions et le déplacement à l'aide du clavier
    if (
        (e.code === 'Backspace' && !value[i]?.length && i > 0) ||
        (e.code === 'ArrowLeft' && i > 0)
    ) {
      e.preventDefault()
      e.stopPropagation()
      if (e.code === 'Backspace' && value[i - 1]?.length && !value[i]?.length) {
        value[i - 1] = ''
        inputRef.current[i - 1].value = ''
        setValue(value)
      }
      inputRef.current[i - 1].focus()
    } else if (
        e.code === 'ArrowRight' &&
        i < value.length - 1
    ) {
      e.preventDefault()
      e.stopPropagation()
      inputRef.current[i + 1].select()
    }
  }


  return (
      <div className='flex justify-center'>
        <div className='flex flex-col items-center justify-center py-10 space-y-[40px] w-full'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='font-bold text-[2.25rem] self-start'>Vous avez un nouveau message !</h2>
          </div>
          <div className='max-w-[640px] space-y-[40px] flex flex-col items-center'>
            <span className='text-[1rem]'>Veuillez saisir le code que vous avez reçu par SMS</span>
            <div className='flex items-start space-x-16 mb-8'>
            <div className=''>
                <form className='flex flex-col items-center justify-center' onSubmit={onSubmit}>
                  <div className={'flex space-x-8 justify-center mb-16 ' + (wiggle ? 'animate-wiggle' : '')} onAnimationEnd={() => setWiggle(false)}>
                    {value.map((v, i) => (
                        <input
                            key={'input_' + i}
                            ref={(el) => (inputRef.current[i] = el)}
                            className='max-w-[32px] h-[64px] bg-white border rounded-[8px] text-xl text-center'
                            maxLength={1}
                            value={v}
                            placeholder={'0'}
                            onFocus={(e) => {
                              // On sélectionne le chiffre quand on focus un input pour pouvoir le remplacer sans le supprimer avant
                              if (e.target.value?.length) inputRef.current[i].select()
                            }}
                            onKeyDownCapture={(e) => handleKeydown(e, i)}
                            onChange={(e) => handleOnChange(e, i)}
                        />
                    ))}
                  </div>
                  {error ? <div className='rounded-[20px] text-center p-[30px] w-full bg-red-200 text-red-700'>Code erroné, veuillez réessayer !</div> : null}
                  {success ? <div className='text-center p-[30px] w-full bg-[#eefbf4] text-[#0b5351] rounded-[20px]'>Code valide !</div> : null}
                </form>
              </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default React
