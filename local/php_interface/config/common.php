<?php
/**
 * Общая конфигурация для всех сайтов и окружений
 */
\Quetzal\Environment\EnvironmentManager::getInstance()->addConfig(
	new \Quetzal\Environment\Configuration\CommonConfiguration(
		array(
			// 'key' => 'value',
            'headerBlocksIBlockId' => 1,
            'weOfferIBlockId' => 2
		)
	)
);
