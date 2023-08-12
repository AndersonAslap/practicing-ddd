## Sistema de Gestão Hospitalar

Um hospital precisa de um sistema para gerenciar suas operações e informações relacionadas a pacientes, médicos, agendamentos de consultas, procedimentos médicos e faturamento. O sistema deve ser capaz de lidar com diversas especialidades médicas e diferentes tipos de procedimentos.

Regras do Problema:

[] - O sistema deve permitir o cadastro de pacientes, contendo informações como nome, data de nascimento, gênero e histórico médico.

[] - Os médicos do hospital também devem ser cadastrados no sistema, fornecendo informações como nome, especialidade, horário de atendimento e contato.

[] - O sistema deve permitir que os médicos agendem consultas com os pacientes. Cada consulta deve ter uma data, horário, duração estimada e médico responsável.

[] - Os procedimentos médicos realizados no hospital devem ser cadastrados no sistema. Cada procedimento deve ter um código, descrição, especialidade relacionada e valor.

[] - Ao final de cada consulta, o médico deve registrar o diagnóstico do paciente, incluindo informações sobre a condição médica, tratamento recomendado e procedimentos a serem realizados.

[] - O sistema deve permitir o agendamento de procedimentos médicos para os pacientes. Cada agendamento deve conter informações como o paciente, procedimento, data, horário e médico responsável.

[] - O faturamento deve ser registrado no sistema, relacionando os procedimentos realizados aos pacientes atendidos. Deve ser possível calcular o valor total a ser cobrado de cada paciente com base nos procedimentos realizados.

[] - O sistema deve ser capaz de gerar relatórios, como a lista de pacientes atendidos por médico em determinado período, o faturamento mensal por especialidade médica e o histórico de procedimentos de um paciente específico.

[] - É importante considerar a segurança e a privacidade dos dados médicos, garantindo que apenas profissionais autorizados tenham acesso às informações dos pacientes.

O sistema deve ser desenvolvido aplicando os princípios do DDD, identificando corretamente os agregados, entidades e objetos de valor do domínio hospitalar. A linguagem ubíqua deve ser utilizada para nomear os conceitos e tornar o código mais compreensível para as partes interessadas.