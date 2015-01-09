(function($) {

	/**
	 * Daily Counter Clock Face
	 *
	 * This class will generate a daily counter for FlipClock.js. A
	 * daily counter will track days, hours, minutes, and seconds. If
	 * the number of available digits is exceeded in the count, a new
	 * digit will be created.
	 *
	 * @param  object  An object of properties to override the default
	 */

	FlipClock.DailyCounterFace = FlipClock.Face.extend({

		showSeconds: true,

		/**
		 * Build the clock face
		 */

		build: function(time) {			
			var offset = 0, time = time ? time : this.time.getDayCounter(this.showSeconds);

			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.showSeconds) {
				this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - 2].$el);
			}
			else
			{
				offset = 2;
			}

			this.createDivider('Minutes').$el.insertBefore(this.lists[this.lists.length - 4 + offset].$el);
			this.createDivider('Hours').$el.insertBefore(this.lists[this.lists.length - 6 + offset].$el);
			this.createDivider('Days', true).$el.insertBefore(this.lists[0].$el);

			this.base();
		},

		/**
		 * Flip the clock face
		 */

		flip: function(time) {
			if(!time) {
				time = this.time.getDayCounter(this.showSeconds);
			}

			this.autoIncrement();
			this.base(time);
		}

	});

}(jQuery));