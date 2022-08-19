# memo
só renderiza o componente caso algum estado ou props seja alterado, caso contrario ele nao rerenderiza

Recomendado quando
  - Pure Functional Components
    quando seu estado e valores nao "pega" informações de "fora", ele funciona isoladamente, recebendo apenas props
  
  - Renders too often
    quando o compontente esta sendo renderizado demais, exemplo, um input;

  - Re-renders with same props
    renderizações com o mesmo componente

  - Medium to big sizes
    Utilizar o memo em componentes muito simples nao vale a pena


# useMemo
  - evitar re-calculos complexos novamente na re-render 

# useCallback
  - Resolver problemas de igualdade referencial
  - recomendado usar quando a função é usado em outros componentes, ou esta sendo utilizada em conjunto do contextAPI