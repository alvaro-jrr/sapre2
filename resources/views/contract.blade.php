<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<title>Contrato de Préstamo #{{$loan->id}}</title>
	</head>
	<body class="font-sans antialiased">
		<h1>SAPRE C.A.</h1>

		<h2>Contrato de Préstamo con Interés y Garantía Prendaria</h2>

		<p>
			<strong>DECLARA</strong> "EL ACREEDOR" Ser una empresa constituida en la República
			Bolivariana de Venezuela cumpliendo con todos los requisitos de la
			ley, representada por el empleado que extiende este contrato por una
			parte y por otra parte DECLARA "EL DEUDOR", {{$loan->user->name}} portador(a) de la
			identificación #{{$loan->user_id}} en el sistema quien, en lo
			adelante, y para los fines del presente contrato, se denominará EL
			DEUDOR.
		</p>

		<p>
			<strong>PREÁMBULO</strong>: Por cuanto al deudor que ha solicitado a la empresa un
			préstamo por la suma de {{$loan->amount}} con la finalidad de
			utilizarlo del modo que prefiera sin interferir con las normas ni
			las cláusulas impuestas en este contrato. Por cuanto a EL ACREEDOR
			ha manifestado su voluntad de acordar a EL DEUDOR la facilidad
			crediticia bajo las condiciones y garantías estipuladas en este
			contrato.
		</p>

		<h3>HAN PACTADO Y CONVENIDO LO SIGUIENTE:</h3>

		<ol type="I">
			<li>
				El préstamo devengará una tasa de interés del
				{{$loan->interest_rate}} por ciento (%), con modalidad
				{{$loan->modality->name}} computada sobre saldos insolutos en
				base al número de días transcurridos entre cada fecha de pago de
				las cuotas del préstamo y la próxima fecha de pago. Queda
				expresamente aceptado por EL DEUDOR que la tasa de interés podrá
				ser revisada periódicamente durante la vigencia del préstamo,
				siempre que hayan transcurrido (_1_) mes(es) a partir del
				desembolso, a los fines de ajustarla a la realidad del costo del
				dinero. En consecuencia, cuando se produzcan variaciones de la
				tasa de interés de este préstamo la cuota mensual quedará
				modificada, en la misma proporción de la nueva tasa de interés
				que fuere establecida, tomando como base el saldo insoluto del
				préstamo al momento en que EL ACREEDOR realice la modificación.
				En caso de inconformidad de EL DEUDOR respecto a la modificación
				de la tasa de interés, este tendrá la facultad de liquidar el
				préstamo en el tiempo correspondiente a treinta (30) días
				hábiles a partir de la fecha de aviso de modificación de la
				tasa.
			</li>

			<li>
				En caso de que existan varios deudores y/o codeudores y/o
				fiadores solidarios, la denominación “EL DEUDOR” es extensiva
				para todos ellos y, por tanto, las obligaciones establecidas a
				cargo de EL DEUDOR en este Contrato.
			</li>

			<li>
				La obligación a cargo de EL ACREEDOR de desembolsar la suma del
				préstamo conforme a este Contrato, está sujeta al cumplimiento
				de EL DEUDOR de obligaciones establecidas en este Contrato o que
				sean establecidas de tiempo en tiempo previa aceptación de EL
				DEUDOR, y a que EL ACREEDOR haya recibido, en forma aceptable
				para el mismo. También EL ACREEDOR tiene el derecho de verificar
				y comprobar las garantías, los documentos e informaciones de
				verificación de identidad, Contratos o cualquier otro documento
				corporativo que permita demostrar que EL DEUDOR cumple
				adecuadamente con todas las obligaciones establecidas en los
				estatutos sociales y las leyes imperantes en la República y EL
				DEUDOR está en la obligación de presentar lo requerido y/o
				cualquier otro documento que guarde relación con el préstamo.
				Las condiciones precedentes antes indicadas no son limitativas,
				y EL ACREEDOR podrá exigir requisitos adicionales de acuerdo a
				sus políticas internas sobre administración de préstamos. Por
				igual, EL ACREEDOR, a su entera discreción, podrá obviar alguna
				de las condiciones precedentes antes indicadas de manera
				definitiva o establecerla como condición a cumplir por EL DEUDOR
				dentro de determinado período con posterioridad al desembolso
				del préstamo.
			</li>

			<li>
				EL DEUDOR se compromete a: Pagar todos sus impuestos dentro de
				los períodos establecidos por la ley; Cumplir con todas las
				obligaciones de los contratos de préstamo (de manera directa o
				indirectamente) que mantenga vigentes con EL ACREEDOR; Mantener
				su capacidad legal y existencia corporativa en el caso de
				personas jurídicas; Poner a disposición de la justicia el bien
				dado en garantía al primer requerimiento que se le haga; Pagar
				las sumas prestadas en la forma y en el plazo acordado durante
				el término del préstamo; Reponer en efectivo o reforzar el bien
				otorgado en garantía en ocasión que este sufriere deterioros o
				depreciaciones que reduzcan su valor hasta el término del
				presente Contrato; No enajenar, dañar voluntariamente, remover,
				trasladar, destruir, ocultar, constituir cualesquiera otras
				cargas, gravámenes, garantías o cualquier afectación o derecho
				real accesorio sobre la garantía otorgada precedentemente, a
				menos que obtenga previamente la autorización expresa y por
				escrito de EL ACREEDOR, so pena de las sanciones impuestas por
				la Ley y de la terminación inmediata del préstamo, y la
				consecuente pérdida del beneficio del término de pago que se le
				otorga por este Contrato, haciéndose de pleno derecho ejecutable
				la garantía descrita anteriormente; No aportar los bienes
				otorgados en garantía o una parte sustancial de sus activos a un
				fideicomiso. EL DEUDOR acepta, declara y reconoce que no podrá
				ceder o transferir ninguna de las obligaciones,
				responsabilidades o derechos asumidos mediante el presente
				acuerdo, sin la autorización previa de EL ACREEDOR.
			</li>

			<li>
				Todos los pagos deben realizarse en la fecha indicada y sin
				requerimiento, y a falta de pago de al menos una (1) cuota para
				amortización del capital e intereses se resolverá que EL
				ACREEDOR puede ejecutar sus derechos establecidos en el presente
				Contrato sin necesidad de ninguna formalidad previa o
				requerimiento y, en consecuencia, EL DEUDOR perderá el beneficio
				del término y de las condiciones de pago que se otorgan para el
				pago del referido préstamo y será ejecutable la garantía
				prendaria que por el presente contrato se otorga. EL DEUDOR
				tendrá la obligación de pagar los intereses sobre el saldo
				adeudado hasta la fecha en que se realice el pago de dichas
				sumas adeudadas. Los pagos realizados por EL DEUDOR a EL
				ACREEDOR mediante cualquier medio de pago que no sea recursos
				monetarios de inmediata disponibilidad, se consideraran
				efectivos el día que los fondos correspondientes estén
				disponibles y se hagan efectivos los pagos correspondientes. EL
				DEUDOR perderá de pleno derecho el beneficio del término y las
				condiciones de pago estipuladas para el reembolso del préstamo
				en virtud del presente Contrato, al sólo incumplimiento de
				cualquiera de las obligaciones dispuestas en el mismo.
			</li>

			<li>
				EL DEUDOR tiene el pleno derecho de realizar pagos anticipados o
				pagar totalmente la suma adeudada antes del vencimiento, siendo
				que esto no lo exhorta de cancelar los intereses
				correspondientes a cada cuota del pago.
			</li>

			<li>
				EL ACREEDOR podrá ejecutar la prenda otorgada en garantía, en
				caso de incumplimiento de Contrato. Y en caso de no cubrir el
				total de la deuda, EL ACREEDOR podrá continuar reclamándole
				directamente a EL DEUDOR el pago de la deuda restante
			</li>

			<li>
				La garantía prendaria o documentos originales que a esta
				refieran, deberán ser obligatoriamente presentados de manera
				física en la agencia de préstamos como requisito previo para
				aprobar el préstamo solicitado. En este sentido, una vez el
				préstamo sea aprobado la garantía prendaria permanecerá en
				custodia de EL DEUDOR hasta la terminación del contrato, de no
				ser que se incumpla alguna de las cláusulas expuestas en el
				presente contrato; de acuerdo con esto, EL DEUDOR se compromete
				formalmente a: Dar aviso inmediato a EL ACREEDOR cualquier daño
				material que por algún u otro accidente sufra el(los) bien(es)
				otorgado(s) en prenda sin desapoderamiento; Cuidar dicho(s)
				bien(es) y no permitir que se lleve a cabo ningún acto de
				deterioro del(de los) mismo(s) y mantenerlo(s) en buen estado de
				conservación y reparación; No constituir ningún otro gravamen
				sobre el(los) mismo(s) sin el consentimiento previo de EL
				ACREEDOR; No vender, donar, arrendar, ni de ninguna otra forma
				ceder o traspasar el(los) bien(es) mueble(s) descrito(s) a
				persona alguna sin haber obtenido el consentimiento previo de EL
				ACREEDOR.
			</li>

			<li>
				En caso de fallecimiento de EL DEUDOR, existiendo cuotas de
				amortización del préstamo vencidas y aún no pagadas, los
				herederos y/o conyugue no podrán ser liberados de la deuda, ni
				podrán solicitar la liberación de la garantía prendaria que por
				este Contrato se otorga, hasta tanto no se salde la totalidad de
				lo adeudado, incluyendo intereses moratorios o cualquier otro
				monto o accesorio adeudado explícito en el presente Contrato.
			</li>

			<li>
				EL DEUDOR debe presentar la copia de este contrato al finiquitar
				el pago de la deuda, para que EL ACREEDOR pueda hacerle entrega
				de un aval que lo libere por completo de toda responsabilidad
				asociada a la deuda por la cantidad que se ha establecido en
				este contrato. En caso de incumplimiento por parte de EL
				ACREEDOR, EL DEUDOR tiene derecho a reclamar por medios legales,
				una indemnización por el costo de cinco (5) veces el valor de la
				deuda original como lo establece el presente contrato.
			</li>
		</ol>
		
		@php
			$date = new DateTimeImmutable($loan->approved_date);
		@endphp

		<p>
			REDACTADO, LEÍDO, APROBADO Y FIRMADO en ciudad ___________________,
			República Bolivariana de Venezuela en fecha {{$date->format("d")}} del mes
			{{$date->format("m")}} del año {{$date->format("o")}}.
		</p>

		<p>FIRMAN:</p>

		<p>
			EL ACREEDOR_________________ y EL DEUDOR _________________________.
		</p>
	</body>
</html>
